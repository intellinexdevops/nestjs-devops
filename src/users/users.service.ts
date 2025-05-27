import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encrypt } from 'src/common/encryption';
import { User } from 'src/typeorm/entities/user.entity';
import { UserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private useRepository: Repository<User>,
  ) {}

  async createUser(user: UserParams): Promise<User> {
    const encryptedPass = await encrypt(user.password);
    const newUser = this.useRepository.create({
      ...user,
      password: encryptedPass,
    });
    return await this.useRepository.save(newUser);
  }

  async findAllUsers(limit: number, offset: number): Promise<[User[], number]> {
    return this.useRepository.findAndCount({
      take: limit,
      skip: offset,
      order: {
        createdAt: 'DESC',
      },
    });
  }
}
