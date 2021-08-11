# VxTel 

- Implementação fullstack de uma aplicação de minutagem de chamadas.
- Inclui tarifagem especial para planos customizados.

## Tecnologias

- Backend: Node.js 14+, Typescript, MySql, Postgres, Docker
- Frontend: node.js 13+, React, Docker

## Arquitetura

- Backend: Hexagonal Microservices
- Frontend: Monolith

# Backend

- Core: Concentra toda a lógica da aplicação, também conhecida como camada de domínio ou de lógica. 
  - Repositories: São as 'ports' da arquitetura ports and adapters (hexagonal). Definem interfaces para obtenção de dados
  - Entities: São as 'source of truth' da aplicação. Definem as representações das entidades do mundo real dentro do domínio.
  - Services: Nome auto explicativo, executam o que o que deve ser executado, utilizando os repositories e trabalhando com as entities.

- DataSources:
  - São os 'adapters' que implementam as 'ports' do domínio, definem a tecnologia utilizada e a forma de obtenção dos dados.

- UseCases:
  - São os microserviços autocontidos. Definem as rotas e controladoras para cada serviço do domínio e são disponibilizados em portas distintas e processos separados.

- Environment:
  - O arquivo .env.sample contem um exemplo de configuração necessária para o projeto. 

- Dockerfile:
  - Através do comando `npm run prod` é feito o build da aplicação, realizadas as migrations das databases e iniciado o servidor de produção.

# Frontend
  - Views:
    - Contém as páginas da aplicação e seus arquivos de estilo

  - Components:    
    - Shared:
      - Contém todos os componentes compartilhados entre as várias views e seus arquivos de estilo
