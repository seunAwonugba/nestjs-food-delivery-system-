import { Knex } from 'knex';

const tableName = 'orderTotalAmountHistories';
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id');
    table.timestamp('time');
    table.integer('total_amount');
    table.integer('order_id').unsigned().references('id').inTable('orders');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
