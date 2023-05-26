import { BaseModel } from './BaseModel';
import { Model } from 'objection';
import { OrderModel } from './OrderModel';

export class LogsModel extends BaseModel {
  static tableName = 'logs';
  time: number;
  description: string;
  orderId: number;

  orderModel: OrderModel;

  static relationMappings() {
    return {
      orderModel: {
        relation: Model.BelongsToOneRelation,
        modelClass: OrderModel,
        join: {
          from: 'logs.order_id',
          to: 'orders.id',
        },
      },
    };
  }
}
