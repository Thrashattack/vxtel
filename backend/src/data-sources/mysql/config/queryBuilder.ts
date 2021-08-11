import Plans from "src/core/entities/Plans";
import { QueryBuilder } from "knex";
import connection from './connection';

const builder: QueryBuilder<Plans> = connection<Plans>();

export default builder;