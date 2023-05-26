import { BaseModel } from './BaseModel';
import { Model } from 'objection';
import { OrderModel } from './OrderModel';

export class OrderTypeModel extends BaseModel {
  static tableName = 'orderTypes';
  name: string;
  orderId: number;

  orderModel: OrderModel;

  static relationMappings() {
    return {
      orderModel: {
        relation: Model.BelongsToOneRelation,
        modelClass: OrderModel,
        join: {
          from: 'orderTypes.order_id',
          to: 'orders.id',
        },
      },
    };
  }
}
