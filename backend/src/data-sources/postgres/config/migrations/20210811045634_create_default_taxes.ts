import * as Knex from "knex";
import Taxes from 'src/core/entities/Taxes';


export async function up(knex: Knex): Promise<void> {
  const taxAtoB: Taxes = {
    sourceRegion: "011",
    destinRegion: "016",
    costPerMinute: 1.90
  }
  const taxBtoA: Taxes = {
    sourceRegion: "016",
    destinRegion: "011",
    costPerMinute: 2.90
  }
  const taxAtoC: Taxes = {
    sourceRegion: "011",
    destinRegion: "017",
    costPerMinute: 1.70
  }
  const taxCtoA: Taxes = {
    sourceRegion: "017",
    destinRegion: "011",
    costPerMinute: 2.70
  }
  const taxAtoD: Taxes = {
    sourceRegion: "011",
    destinRegion: "018",
    costPerMinute: 0.90
  }
  const taxDtoA: Taxes = {
    sourceRegion: "018",
    destinRegion: "011",
    costPerMinute: 1.90
  }

  await knex.table<Taxes>('taxes').insert(taxAtoB);
  await knex.table<Taxes>('taxes').insert(taxBtoA);
  await knex.table<Taxes>('taxes').insert(taxAtoC);
  await knex.table<Taxes>('taxes').insert(taxCtoA);
  await knex.table<Taxes>('taxes').insert(taxAtoD);
  await knex.table<Taxes>('taxes').insert(taxDtoA);

  return;
}


export async function down(knex: Knex): Promise<void> {
  await knex.table<Taxes>('taxes').where('sourceRegion', '011').where('destinRegion', '016').delete();
  await knex.table<Taxes>('taxes').where('sourceRegion', '011').where('destinRegion', '017').delete();
  await knex.table<Taxes>('taxes').where('sourceRegion', '011').where('destinRegion', '018').delete();
  await knex.table<Taxes>('taxes').where('sourceRegion', '016').where('destinRegion', '011').delete();
  await knex.table<Taxes>('taxes').where('sourceRegion', '017').where('destinRegion', '011').delete();
  await knex.table<Taxes>('taxes').where('sourceRegion', '018').where('destinRegion', '011').delete();
  
  return;
}

