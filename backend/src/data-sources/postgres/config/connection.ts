import Knex from 'knex';
import knexConfig from './knexfile';

const knex = Knex(knexConfig[process.env.NODE_ENV as string]);

knex.migrate.latest();

export default knex;