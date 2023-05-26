"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const tableName = 'users';
async function up(knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments('id');
        table.string('first_name');
        table.string('last_name');
        table.string('email').unique();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable(tableName);
}
exports.down = down;
//# sourceMappingURL=20230525191258_User.js.map