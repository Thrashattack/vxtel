import Taxes from "src/core/entities/Taxes";
import { QueryBuilder } from "knex";
import connection from './connection';

const builder: QueryBuilder<Taxes> = connection<Taxes>();

export default builder;