import { BaseModel } from './BaseModel';
import { LogsModel } from './LogsModel';
import { UserModel } from './UserModel';
import { OrderTotalAmountHistory } from './OrderTotalAmountHistory';
import { CalculatedOrderModel } from './CalculatedOrderModel';
import { OrderTypeModel } from './OrderTypeModel';
export declare class OrderModel extends BaseModel {
    static tableName: string;
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
    static relationMappings(): {
        logsModel: {
            relation: import("objection").RelationType;
            modelClass: typeof LogsModel;
            join: {
                from: string;
                to: string;
            };
        };
        userModel: {
            relation: import("objection").RelationType;
            modelClass: typeof UserModel;
            join: {
                from: string;
                to: string;
            };
        };
        orderTotalAmountHistory: {
            relation: import("objection").RelationType;
            modelClass: typeof OrderTotalAmountHistory;
            join: {
                from: string;
                to: string;
            };
        };
        calculatedOrders: {
            relation: import("objection").RelationType;
            modelClass: typeof CalculatedOrderModel;
            join: {
                from: string;
                to: string;
            };
        };
        orderTypes: {
            relation: import("objection").RelationType;
            modelClass: typeof OrderTypeModel;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
