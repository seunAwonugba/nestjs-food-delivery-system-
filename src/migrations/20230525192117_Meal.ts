import { Knex } from 'knex';

const tableName = 'meals';
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id');
    table.json('brand');
    table.json('meals');
    table
      .integer('calculated_orders_id')
      .unsigned()
      .references('id')
      .inTable('calculatedOrders');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
