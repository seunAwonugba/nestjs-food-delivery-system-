"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderTotalAmountHistory = void 0;
const BaseModel_1 = require("./BaseModel");
const OrderModel_1 = require("./OrderModel");
const objection_1 = require("objection");
class OrderTotalAmountHistory extends BaseModel_1.BaseModel {
    static get relationMappings() {
        return {
            orderModel: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: OrderModel_1.OrderModel,
                join: {
                    from: 'orderTotalAmountHistories.id',
                    to: 'orders.id',
                },
            },
        };
    }
}
OrderTotalAmountHistory.tableName = 'orderTotalAmountHistories';
exports.OrderTotalAmountHistory = OrderTotalAmountHistory;
//# sourceMappingURL=OrderTotalAmountHistory.js.map