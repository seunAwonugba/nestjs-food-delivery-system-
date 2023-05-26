import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/CreateOrderDto';
import { Response } from 'express';
import { OrderModel } from 'src/models/OrderModel';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(createOrderDto: CreateOrderDto, res: Response): Promise<Response<any, Record<string, any>>>;
    getOrders(): Promise<OrderModel[]>;
}
