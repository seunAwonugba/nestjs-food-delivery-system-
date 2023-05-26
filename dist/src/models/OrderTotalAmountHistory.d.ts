import { BaseModel } from './BaseModel';
import { OrderModel } from './OrderModel';
export declare class OrderTotalAmountHistory extends BaseModel {
    static tableName: string;
    time: string;
    totalAmount: string;
    orderId: string;
    orderModel: OrderModel;
    static get relationMappings(): {
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
