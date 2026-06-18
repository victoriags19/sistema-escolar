# Sistema Escolar — Portal do Aluno

[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![JavaScript](https://img.shields.io/badge/Frontend-Vanilla%20JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

> Uma solução Full Stack moderna e responsiva projetada para centralizar a experiência acadêmica do estudante de forma intuitiva, segura e performática.

Este projeto simula um **Portal do Aluno** completo. Ele resolve desde o desafio crítico da autenticação segura no ecossistema web até a agregação inteligente de dados complexos (como o cálculo de médias e taxas de frequência em tempo real direto nas queries do banco de dados).

---

## 🎯 Principais Destaques do Projeto

* **Experiência do Usuário (UX) Fluida:** Interface construída em arquitetura SPA (*Single Page Application*) rústica usando JavaScript puro, onde os conteúdos (Dashboard, Dados, Matérias e Histórico) são injetados dinamicamente sem necessidade de *refresh* na página.
* **Segurança em Primeiro Lugar:** Validação rigorosa de políticas de senhas no Frontend via expressões regulares (Regex), mitigando requisições desnecessárias à API, combinado com criptografia **Bcrypt (hashing)** no Backend para proteção contra vazamento de credenciais.
* **Inteligência de Dados Relacional:** Banco de dados MySQL totalmente normalizado e estruturado com chaves estrangeiras (`FOREIGN KEY`), restrições de unicidade (`UNIQUE`) e regras de comportamento controlado (`CASCADE` / `SET NULL`) para garantir consistência total dos dados escolares.

* ## 👥 Colaboradores

Abaixo, as mentes responsáveis pelo desenvolvimento e evolução deste sistema escolar:

- Caio dos Santos Campos
- Patrick Rodrigues do Nascimento
- Thiago Felippe Martins da Silva
- Victor Henrique Vieira Dantas
- Victória Gomes Silva
