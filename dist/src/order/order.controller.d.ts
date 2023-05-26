import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/CreateOrderDto';
import { Response } from 'express';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(createOrderDto: CreateOrderDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
