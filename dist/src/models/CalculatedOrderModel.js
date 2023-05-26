"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatedOrderModel = void 0;
const BaseModel_1 = require("./BaseModel");
const MealModel_1 = require("./MealModel");
const objection_1 = require("objection");
const OrderModel_1 = require("./OrderModel");
class CalculatedOrderModel extends BaseModel_1.BaseModel {
    static get relationMappings() {
        return {
            mealModel: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: MealModel_1.MealModel,
                join: {
                    from: 'calculatedOrders.id',
                    to: 'meals.calculated_orders_id',
                },
            },
            orderModel: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: OrderModel_1.OrderModel,
                join: {
                    from: 'calculatedOrders.order_id',
                    to: 'orders.id',
                },
            },
        };
    }
}
CalculatedOrderModel.tableName = 'calculatedOrders';
exports.CalculatedOrderModel = CalculatedOrderModel;
//# sourceMappingURL=CalculatedOrderModel.js.map