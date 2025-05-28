import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { User } from './typeorm/entities/user.entity';
import { Book } from './typeorm/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.NEST_DATABASE_HOST,
      port: Number(process.env.NEST_DATABASE_PORT),
      username: process.env.NEST_DATABASE_USER,
      password: process.env.NEST_DATABASE_PASS,
      database: process.env.NEST_DATABASE_NAME,
      entities: [User, Book],
      synchronize: true,
    }),
    // UsersModule,
    BooksModule,
  ],
})
export class AppModule {}
