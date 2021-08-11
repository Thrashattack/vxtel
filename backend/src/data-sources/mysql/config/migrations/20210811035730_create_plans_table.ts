import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTableIfNotExists('plans', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.integer('freeMinutes').notNullable();
    table.decimal('exceededMinutePercentTax').notNullable();
    table.timestamps();    
  });
}


export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTableIfExists('plans');
}

