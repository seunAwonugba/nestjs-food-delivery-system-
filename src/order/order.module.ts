import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { DatabaseService } from 'src/database/database.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [
    OrderService,
    {
      provide: 'DatabaseService',
      useClass: DatabaseService,
    },
  ],
  imports: [DatabaseModule],
  controllers: [OrderController],
})
export class OrderModule {}
