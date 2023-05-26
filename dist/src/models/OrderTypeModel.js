"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderTypeModel = void 0;
const BaseModel_1 = require("./BaseModel");
const objection_1 = require("objection");
const OrderModel_1 = require("./OrderModel");
class OrderTypeModel extends BaseModel_1.BaseModel {
    static relationMappings() {
        return {
            orderModel: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: OrderModel_1.OrderModel,
                join: {
                    from: 'orderTypes.order_id',
                    to: 'orders.id',
                },
            },
        };
    }
}
OrderTypeModel.tableName = 'orderTypes';
exports.OrderTypeModel = OrderTypeModel;
//# sourceMappingURL=OrderTypeModel.js.map