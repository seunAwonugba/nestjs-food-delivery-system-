import { BaseModel } from './BaseModel';
import { MealModel } from './MealModel';
import { Model } from 'objection';
import { OrderModel } from './OrderModel';

export class CalculatedOrderModel extends BaseModel {
  static tableName = 'calculatedOrders';
  totalAmount: number;
  freeDelivery: boolean;
  deliveryFee: number;
  serviceCharge: number;
  addressDetails: any;
  orderId: number;

  mealModel: MealModel;
  orderModel: OrderModel;

  static get relationMappings() {
    return {
      mealModel: {
        relation: Model.HasOneRelation,
        modelClass: MealModel,
        join: {
          from: 'calculatedOrders.id',
          to: 'meals.calculated_orders_id',
        },
      },
      orderModel: {
        relation: Model.BelongsToOneRelation,
        modelClass: OrderModel,
        join: {
          from: 'calculatedOrders.order_id',
          to: 'orders.id',
        },
      },
    };
  }
}
