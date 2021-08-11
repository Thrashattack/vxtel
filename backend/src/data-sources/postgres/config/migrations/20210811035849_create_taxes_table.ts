import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTableIfNotExists('taxes', function (table) {
    table.increments();
    table.string('sourceRegion').notNullable();
    table.string('destinRegion').notNullable();
    table.decimal('costPerMinute').notNullable();
    table.timestamps();
  });
}


export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTableIfExists('taxes');
}

