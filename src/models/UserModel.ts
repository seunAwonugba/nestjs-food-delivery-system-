import { BaseModel } from './BaseModel';
import { OrderModel } from './OrderModel';
import { Model } from 'objection';
export class UserModel extends BaseModel {
  static tableName = 'users';
  firstName: string;
  lastName: string;
  email: string;

  orderModel: OrderModel;

  static get relationMappings() {
    return {
      orderModel: {
        relation: Model.HasOneRelation,
        modelClass: OrderModel,
        join: {
          from: 'users.id',
          to: 'orders.user_id',
        },
      },
    };
  }
}
