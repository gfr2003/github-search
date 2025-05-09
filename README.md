# 🧠 GitHub User Search App – Iti Itaú Challenge

Aplicação Angular que permite buscar usuários do GitHub e visualizar seus dados públicos, como perfil e repositórios. Criado como parte de um desafio técnico do Iti Itaú, com foco em boas práticas, performance e experiência do usuário.

---

## 🔍 Funcionalidades

- 🔎 Busca de usuários do GitHub
- 📄 Exibição de perfil completo (avatar, bio, localização, seguidores, etc.)
- 📁 Listagem dos repositórios públicos com ordenação por estrelas
- 🧪 Testes E2E com Cypress
- ⚙️ Feedback visual com toast e spinner do PrimeNG
- 📱 Responsivo e mobile-first

---

## 🚀 Tecnologias

- [Angular 17+](https://angular.io/)
- [PrimeNG](https://primefaces.org/primeng/)
- [Cypress](https://www.cypress.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [RxJS](https://rxjs.dev/)
- [GitHub REST API](https://docs.github.com/en/rest)

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/gfr2003/github-user-search.git
cd github-user-search

# Instale as dependências
npm install
```

---

## 🧪 Rodando localmente

```bash
# Inicie a aplicação
npm start
# Acesse: http://localhost:4200
```

---

## 🧪 Testes E2E

```bash
# Rodar testes com Cypress
npx cypress open
# Ou headless
npx cypress run
```

> Os testes cobrem:
> - Mensagem inicial
> - Busca válida e exibição de dados
> - Tratamento de erro (usuário inexistente)
> - Verificação do loading spinner
> - Interceptação de chamadas com `cy.intercept`

---

## ⚠️ Limitação da API

A [GitHub REST API](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting) impõe limites de requisições anônimas (60/hora). Para evitar isso, considere autenticar suas chamadas usando token pessoal no serviço.

---

## 🧩 Estrutura de pastas

```
src/
├── app/
│   ├── components/        # Componentes reutilizáveis (Header, SearchForm)
│   ├── pages/             # Páginas (UserPage)
│   ├── services/          # Serviço de integração com GitHub API
│   ├── models/            # Interfaces de dados da API
├── assets/
│   └── favicon-itau.png   # Favicon personalizado
├── environments/          # Configurações de ambiente
```

---

## 💡 Melhorias futuras (não implementei devido ao tempo)

- Autenticação via token para evitar rate limit
- Paginação dos repositórios
- Internacionalização (i18n)
- Cache de resultados

---