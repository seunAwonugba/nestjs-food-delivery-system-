import { BaseModel } from './BaseModel';
import { OrderModel } from './OrderModel';
export declare class LogsModel extends BaseModel {
    static tableName: string;
    time: number;
    description: string;
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
