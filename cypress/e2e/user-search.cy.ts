describe('GitHub User Search App', () => {
  const baseUrl = 'http://localhost:4200';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Deve exibir mensagem inicial de boas-vindas', () => {
    cy.contains('Bem-vindo ao Buscador de Usuários GitHub').should('exist');
    cy.contains(
      'Utilize o campo acima para buscar por um usuário do GitHub'
    ).should('exist');
  });

  it('Deve buscar um usuário válido e exibir os dados', () => {
    const username = 'octocat';

    cy.get('input#username').type(username);
    cy.contains('Buscar').click();
    cy.wait(100);
    cy.get('.custom-spinner').should('exist');
    cy.get('.custom-spinner', { timeout: 10000 }).should('not.exist');

    cy.get('.user-info').should('exist');
    cy.get('.user-avatar').should('have.attr', 'src').and('include', 'avatars');
    cy.contains(username).should('exist');
    cy.get('.repos-table').should('exist');
  });

  it('Deve exibir toast de erro para usuário inválido', () => {
    cy.get('input#username').type('usuariotesteinvalido1234567890');
    cy.contains('Buscar').click();

    cy.get('p-toast').should('exist');
    cy.contains('Usuário não encontrado').should('exist');
  });

  it('Deve mostrar spinner de carregamento durante requisição', () => {
    cy.intercept('GET', '**/users/octocat', {
      delay: 1000,
      fixture: 'user.json',
    }).as('getUser');

    cy.intercept('GET', '**/users/octocat/repos', {
      delay: 1000,
      fixture: 'repos.json',
    }).as('getRepos');

    cy.get('input#username').type('octocat');
    cy.contains('Buscar').click();
    cy.wait(100);
    cy.get('.custom-spinner').should('exist');
    cy.wait('@getUser');
    cy.wait('@getRepos');
    cy.get('.custom-spinner').should('not.exist');
  });
});
