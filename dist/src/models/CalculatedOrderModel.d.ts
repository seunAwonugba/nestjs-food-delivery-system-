import { BaseModel } from './BaseModel';
import { MealModel } from './MealModel';
import { OrderModel } from './OrderModel';
export declare class CalculatedOrderModel extends BaseModel {
    static tableName: string;
    totalAmount: number;
    freeDelivery: boolean;
    deliveryFee: number;
    serviceCharge: number;
    addressDetails: any;
    orderId: number;
    mealModel: MealModel;
    orderModel: OrderModel;
    static get relationMappings(): {
        mealModel: {
            relation: import("objection").RelationType;
            modelClass: typeof MealModel;
            join: {
                from: string;
                to: string;
            };
        };
        orderModel: {
            relation: import("objection").RelationType;
            modelClass: typeof OrderModel;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
