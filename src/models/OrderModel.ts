import { BaseModel } from './BaseModel';
import { Model } from 'objection';
import { LogsModel } from './LogsModel';
import { UserModel } from './UserModel';
import { OrderTotalAmountHistory } from './OrderTotalAmountHistory';
import { CalculatedOrderModel } from './CalculatedOrderModel';
import { OrderTypeModel } from './OrderTypeModel';
export class OrderModel extends BaseModel {
  static tableName = 'orders';
  completed: boolean;
  cancelled: boolean;
  kitchenCancelled: boolean;
  kitchenAccepted: boolean;
  kitchenDispatched: boolean;
  kitchenDispatchedTime: string;
  completedTime: string;
  riderId: number;
  kitchenPrepared: boolean;
  riderAssigned: boolean;
  paid: boolean;
  orderCode: string;
  orderChange: string;
  calculatedOrderId: number;
  kitchenVerifiedTime: string;
  kitchenCompletedTime: string;
  shopAccepted: boolean;
  shopPrepared: boolean;
  noOfMealbagsDelivered: number;
  noOfDrinksDelivered: number;
  riderStartedTime: string;
  riderStarted: boolean;
  riderArrivedTime: string;
  riderArrived: boolean;
  isFailedTrip: boolean;
  failedTripDetails: any;
  boxNumber: string;
  shelfId: number;
  userId: number;

  logsModel: LogsModel;
  orderTotalAmountHistories: OrderTotalAmountHistory;
  calculatedOrders: CalculatedOrderModel;
  orderTypes: OrderTypeModel;

  static relationMappings() {
    return {
      logsModel: {
        relation: Model.HasManyRelation,
        modelClass: LogsModel,
        join: {
          from: 'orders.id',
          to: 'logs.order_id',
        },
      },
      userModel: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'orders.user_id',
          to: 'users.id',
        },
      },
      orderTotalAmountHistory: {
        relation: Model.HasOneRelation,
        modelClass: OrderTotalAmountHistory,
        join: {
          from: 'orders.id',
          to: 'orderTotalAmountHistories.id',
        },
      },
      calculatedOrders: {
        relation: Model.HasOneRelation,
        modelClass: CalculatedOrderModel,
        join: {
          from: 'orders.id',
          to: 'calculatedOrders.id',
        },
      },

      orderTypes: {
        relation: Model.HasOneRelation,
        modelClass: OrderTypeModel,
        join: {
          from: 'orders.id',
          to: 'orderTypes.id',
        },
      },
    };
  }
}
