import { BaseModel } from './BaseModel';
import { OrderModel } from './OrderModel';
import { Model } from 'objection';
export class OrderTotalAmountHistory extends BaseModel {
  static tableName = 'orderTotalAmountHistories';
  time: string;
  totalAmount: string;
  orderId: string;

  orderModel: OrderModel;

  static get relationMappings() {
    return {
      orderModel: {
        relation: Model.BelongsToOneRelation,
        modelClass: OrderModel,
        join: {
          from: 'orderTotalAmountHistories.id',
          to: 'orders.id',
        },
      },
    };
  }
}
