"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const BaseModel_1 = require("./BaseModel");
const OrderModel_1 = require("./OrderModel");
const objection_1 = require("objection");
class UserModel extends BaseModel_1.BaseModel {
    static get relationMappings() {
        return {
            orderModel: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: OrderModel_1.OrderModel,
                join: {
                    from: 'users.id',
                    to: 'orders.user_id',
                },
            },
        };
    }
}
UserModel.tableName = 'users';
exports.UserModel = UserModel;
//# sourceMappingURL=UserModel.js.map