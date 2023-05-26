import { BaseModel } from './BaseModel';
import { CalculatedOrderModel } from './CalculatedOrderModel';
import { Model } from 'objection';

export class MealModel extends BaseModel {
  static tableName = 'meals';
  brand: any;
  meals: any;
  calculatedOrdersId: number;

  calculatedOrderModel: CalculatedOrderModel;

  static relationMappings() {
    return {
      orderModel: {
        relation: Model.BelongsToOneRelation,
        modelClass: CalculatedOrderModel,
        join: {
          from: 'meals.calculated_orders_id',
          to: 'calculatedOrders.id',
        },
      },
    };
  }
}
