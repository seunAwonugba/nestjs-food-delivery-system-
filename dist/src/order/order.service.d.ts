import { DatabaseService } from 'src/database/database.service';
import { CreateOrderDto } from './dto/CreateOrderDto';
import { OrderModel } from 'src/models/OrderModel';
export declare class OrderService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    createOrder(createOrderDto: CreateOrderDto): Promise<OrderModel>;
    getOrders(): Promise<OrderModel[]>;
}
