import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { User } from './typeorm/entities/user.entity';
import { Book } from './typeorm/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rememo_db',
      entities: [User, Book],
      synchronize: true,
    }),
    UsersModule,
    BooksModule,
  ],
})
export class AppModule {}
