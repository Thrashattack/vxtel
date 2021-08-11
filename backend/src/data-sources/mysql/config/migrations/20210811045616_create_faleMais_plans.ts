import * as Knex from "knex";
import Plans from "src/core/entities/Plans";

export async function up(knex: Knex): Promise<void> {
  const faleMais30: Plans = {
    name: "faleMais30",
    freeMinutes: 30,
    exceededMinutePercentTax: 10
  }
  const faleMais60: Plans = {
    name: "faleMais60",
    freeMinutes: 60,
    exceededMinutePercentTax: 10
  }
  const faleMais120: Plans = {
    name: "faleMais120",
    freeMinutes: 120,
    exceededMinutePercentTax: 10
  }
  await knex.table<Plans>('plans').insert(faleMais30);
  await knex.table<Plans>('plans').insert(faleMais60);
  await knex.table<Plans>('plans').insert(faleMais120);

  return;
}


export async function down(knex: Knex): Promise<void> {
  await knex.table<Plans>('plans').where('name', 'faleMais30').delete();
  await knex.table<Plans>('plans').where('name', 'faleMais60').delete();
  await knex.table<Plans>('plans').where('name', 'faleMais120').delete();
  
  return;
}

