import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/Entities/User';
import { UserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private useRepository: Repository<User>,
  ) {}

  createUser(user: UserParams) {
    const newUser = this.useRepository.create(user);
    return this.useRepository.save(newUser);
  }

  findAllUsers(): Promise<User[]> {
    return this.useRepository.find();
  }
}
