import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { PaginationQueryDto } from 'src/common/pagination.dto';
import { User } from 'src/typeorm/entities/user.entity';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async createUser(@Body() userDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(userDto);
  }

  @Get()
  @ApiOperation({ summary: 'Used to fetch all users' })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'offset', required: false, type: Number })
  async findAllUsers(@Query() query: PaginationQueryDto) {
    const { limit, offset } = query;
    const [data, total] = await this.userService.findAllUsers(limit!, offset!);
    if (!data) {
      return {
        status: {
          code: 0,
          msg: 'No users found.',
          status: 404,
          timestamp: new Date().toISOString(),
        },
        data: null,
      };
    }
    return {
      status: {
        code: 0,
        msg: 'Successfully retrieved all users.',
        status: 200,
        timestamp: new Date().toISOString(),
      },
      data,
      total,
      limit: Number(limit),
      offset: Number(offset),
    };
  }
}
