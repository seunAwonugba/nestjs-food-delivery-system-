import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/database/database.module';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'DatabaseService',
      useClass: DatabaseService,
    },
  ],
  imports: [DatabaseModule],
})
export class UserModule {}
