import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/Entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Add your entities here
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
