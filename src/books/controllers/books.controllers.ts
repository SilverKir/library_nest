import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BooksService } from '../services/books.service';
import { IBook } from '../interfaces/books.interface';
import { Book } from '../models/books.models';

@Controller('book')
export class BooksController {
  constructor(private servise: BooksService) {}
  @Get()
  async findAll(): Promise<IBook[]> {
    return new Promise((resolve) => resolve(this.servise.findAll()));
  }

  @Get(':id')
  async getBookById(@Param('id') id: string): Promise<IBook> {
    return new Promise((resolve, reject) => {
      const book = this.servise.findById(id);
      if (book) {
        resolve(book);
      } else {
        reject(new Error('Book not found'));
      }
    });
  }

  @Post()
  async create(@Body() createBook: IBook): Promise<IBook> {
    return new Promise((resolve) => {
      try {
        const newBook = new Book(createBook);
        this.servise.create(newBook);
        resolve(newBook);
      } catch {
        console.log('Incorrect data');
      }
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBook: IBook,
  ): Promise<IBook> {
    return new Promise((resolve, reject) => {
      try {
        this.servise.update(id, updateBook);
        resolve(this.getBookById(id));
      } catch (e) {
        reject(new Error(e));
      }
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    try {
      this.servise.delete(id);
    } catch (e) {
      console.log(e);
    }
  }
}
