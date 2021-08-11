FROM node:14

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g knex pm2

# Ports are defined in .env for each microservice
EXPOSE 3000 3001 

CMD [ "npm", "run", "prod" ]