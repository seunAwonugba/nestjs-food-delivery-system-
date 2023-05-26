import { BaseModel } from './BaseModel';
import { CalculatedOrderModel } from './CalculatedOrderModel';
export declare class MealModel extends BaseModel {
    static tableName: string;
    brand: any;
    meals: any;
    calculatedOrdersId: number;
    calculatedOrderModel: CalculatedOrderModel;
    static relationMappings(): {
        orderModel: {
            relation: import("objection").RelationType;
            modelClass: typeof CalculatedOrderModel;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
