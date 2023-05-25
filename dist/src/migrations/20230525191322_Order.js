"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const tableName = 'orders';
async function up(knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments('id');
        table.boolean('completed').defaultTo('false');
        table.boolean('cancelled').defaultTo('false');
        table.boolean('kitchen_cancelled').defaultTo('false');
        table.boolean('kitchen_accepted').defaultTo('false');
        table.boolean('kitchen_dispatched').defaultTo('false');
        table.timestamp('kitchen_dispatched_time');
        table.timestamp('completed_time');
        table.integer('rider_id');
        table.boolean('kitchen_prepared');
        table.boolean('rider_assigned');
        table.boolean('paid');
        table.string('order_code');
        table.string('order_change');
        table.integer('calculated_order_id');
        table.timestamp('kitchen_verified_time');
        table.timestamp('kitchen_completed_time');
        table.boolean('shop_accepted');
        table.boolean('shop_prepared');
        table.integer('no_of_mealbags_delivered');
        table.integer('no_of_drinks_delivered');
        table.timestamp('rider_started_time');
        table.boolean('rider_started');
        table.timestamp('rider_arrived_time');
        table.boolean('rider_arrived');
        table.boolean('is_failed_trip');
        table.json('failed_trip_details');
        table.string('box_number');
        table.integer('shelf_id');
        table.integer('user_id').unsigned().references('id').inTable('users');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable(tableName);
}
exports.down = down;
//# sourceMappingURL=20230525191322_Order.js.map