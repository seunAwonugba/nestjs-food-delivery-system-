import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/CreateOrderDto';
import { Request, Response } from 'express';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('/create-order')
  async createOrder(
    @Body() createOrderDto: CreateOrderDto,
    @Res() res: Response,
  ) {
    try {
      const createOrder = await this.orderService.createOrder(createOrderDto);
      return res.status(HttpStatus.CREATED).json({
        success: true,
        data: createOrder,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
