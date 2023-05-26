import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateOrderDto } from './dto/CreateOrderDto';
import { OrderModel } from 'src/models/OrderModel';

@Injectable()
export class OrderService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<OrderModel> {
    const knex = this.databaseService.getKnexInstance();
    return knex('orders').insert(createOrderDto);
  }
}
