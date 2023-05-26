"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealModel = void 0;
const BaseModel_1 = require("./BaseModel");
const CalculatedOrderModel_1 = require("./CalculatedOrderModel");
const objection_1 = require("objection");
class MealModel extends BaseModel_1.BaseModel {
    static relationMappings() {
        return {
            orderModel: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: CalculatedOrderModel_1.CalculatedOrderModel,
                join: {
                    from: 'meals.calculated_orders_id',
                    to: 'calculatedOrders.id',
                },
            },
        };
    }
}
MealModel.tableName = 'meals';
exports.MealModel = MealModel;
//# sourceMappingURL=MealModel.js.map