import { BaseModel } from './BaseModel';
import { OrderModel } from './OrderModel';
export declare class OrderTypeModel extends BaseModel {
    static tableName: string;
    name: string;
    orderId: number;
    orderModel: OrderModel;
    static relationMappings(): {
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
