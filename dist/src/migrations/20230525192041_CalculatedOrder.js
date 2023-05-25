"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const tableName = 'calculatedOrders';
async function up(knex) {
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
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable(tableName);
}
exports.down = down;
//# sourceMappingURL=20230525192041_CalculatedOrder.js.map