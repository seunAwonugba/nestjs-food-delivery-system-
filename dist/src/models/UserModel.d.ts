import { BaseModel } from './BaseModel';
import { OrderModel } from './OrderModel';
export declare class UserModel extends BaseModel {
    static tableName: string;
    firstName: string;
    lastName: string;
    email: string;
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
