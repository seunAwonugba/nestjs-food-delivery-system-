"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsModel = void 0;
const BaseModel_1 = require("./BaseModel");
const objection_1 = require("objection");
const OrderModel_1 = require("./OrderModel");
class LogsModel extends BaseModel_1.BaseModel {
    static relationMappings() {
        return {
            orderModel: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: OrderModel_1.OrderModel,
                join: {
                    from: 'logs.order_id',
                    to: 'orders.id',
                },
            },
        };
    }
}
LogsModel.tableName = 'logs';
exports.LogsModel = LogsModel;
//# sourceMappingURL=LogsModel.js.map