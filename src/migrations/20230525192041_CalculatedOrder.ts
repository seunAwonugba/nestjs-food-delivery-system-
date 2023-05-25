import { Knex } from 'knex';

const tableName = 'calculatedOrders';
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id');
    table.integer('total_amount');
    table.boolean('free_delivery');
    table.integer('delivery_fee');
    table.integer('service_charge');
    table.json('address_details');
    table.integer('order_id').unsigned().references('id').inTable('orders');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
