import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/typeorm/entities/book.entity';
import { Repository } from 'typeorm';
import { BookParams } from 'src/utils/types';

@Injectable()
export class BooksService {
  // This service will handle book-related logic
  // For example, methods to create, find, update, and delete books
  // You can inject repositories here as needed
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  createBook(bookData: BookParams) {
    const newBook = this.bookRepository.create(bookData);
    return this.bookRepository.save(newBook);
  }

  findAllBooks(limit: number, offset: number): Promise<[Book[], number]> {
    return this.bookRepository.findAndCount({
      take: limit,
      skip: offset,
      order: {
        createdAt: 'DESC',
      },
    });
  }

  findOneBook(id: number): Promise<Book | null> {
    return this.bookRepository.findOne({ where: { id } });
  }
}
