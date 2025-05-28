import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from 'src/typeorm/entities/book.entity';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { PaginationQueryDto } from 'src/common/pagination.dto';

@Controller('api/books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Post()
  @ApiOperation({ summary: 'Used to create new book' })
  async createBook(@Body() bookDto: CreateBookDto): Promise<Book> {
    const result = await this.bookService.createBook(bookDto);
    return result;
  }

  @Get()
  @ApiOperation({ summary: 'Used to fetch all books' })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'offset', required: false, type: Number })
  async fetchAllBooks(@Query() query: PaginationQueryDto) {
    const { limit, offset } = query;
    const [data, total] = await this.bookService.findAllBooks(limit!, offset!);
    if (!data?.length) {
      return {
        status: {
          code: 0,
          msg: 'No book found.',
          status: 404,
          timestamp: new Date().toISOString(),
        },
        content: {
          data: null,
          total,
          limit: Number(limit),
          offset: Number(offset),
        },
      };
    }
    return {
      status: {
        code: 0,
        msg: 'Successfully retrieved all books.',
        status: 200,
        timestamp: new Date().toISOString(),
      },
      content: {
        data,
        total,
        limit: Number(limit),
        offset: Number(offset),
      },
    };
  }
}
