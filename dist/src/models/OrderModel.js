"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const BaseModel_1 = require("./BaseModel");
const objection_1 = require("objection");
const LogsModel_1 = require("./LogsModel");
const UserModel_1 = require("./UserModel");
const OrderTotalAmountHistory_1 = require("./OrderTotalAmountHistory");
const CalculatedOrderModel_1 = require("./CalculatedOrderModel");
const OrderTypeModel_1 = require("./OrderTypeModel");
class OrderModel extends BaseModel_1.BaseModel {
    static relationMappings() {
        return {
            logsModel: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: LogsModel_1.LogsModel,
                join: {
                    from: 'orders.id',
                    to: 'logs.order_id',
                },
            },
            userModel: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: UserModel_1.UserModel,
                join: {
                    from: 'orders.user_id',
                    to: 'users.id',
                },
            },
            orderTotalAmountHistory: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: OrderTotalAmountHistory_1.OrderTotalAmountHistory,
                join: {
                    from: 'orders.id',
                    to: 'orderTotalAmountHistories.id',
                },
            },
            calculatedOrders: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: CalculatedOrderModel_1.CalculatedOrderModel,
                join: {
                    from: 'orders.id',
                    to: 'calculatedOrders.id',
                },
            },
            orderTypes: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: OrderTypeModel_1.OrderTypeModel,
                join: {
                    from: 'orders.id',
                    to: 'orderTypes.id',
                },
            },
        };
    }
}
OrderModel.tableName = 'orders';
exports.OrderModel = OrderModel;
//# sourceMappingURL=OrderModel.js.map