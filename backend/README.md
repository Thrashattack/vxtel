## Backend 

- Core: It concentrates all application logic, also known as domain or logic layer.
  - Repositories: These are the 'ports' of the ports and adapters (hexagonal) architecture. Define interfaces for obtaining data
  - Entities: They are the 'source of truth' of the application. They define representations of real-world entities within the domain.
  - Services: Self explanatory name, they execute what should be executed, using the repositories and working with the entities.

- DataSources:
  - They are the 'adapters' that implement the 'ports' of the domain, define the technology used and the way of obtaining the data.

- UseCases:
  - These are self-contained microservices. They define the routes and controllers for each service in the domain and are available on different ports and separate processes.

- Environment:
  - The .env.sample file contains an example of the necessary configuration for the project.

- Dockerfile:
  - Using the `npm run prod` command, the application is built, the databases are migrated and the production server is started.