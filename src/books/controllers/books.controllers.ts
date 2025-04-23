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
import { IBook } from '../interfaces/dto/IBook';
import { BookDocument } from '../models/books.models';

@Controller('book')
export class BooksController {
  constructor(private servise: BooksService) {}
  @Get()
  async findAll(): Promise<IBook[]> {
    return await this.servise.findAll();
  }

  @Get(':id')
  async getBookById(@Param('id') id: string): Promise<IBook | null> {
    return this.servise.findById(id);
  }

  @Post()
  async create(@Body() createBook: IBook): Promise<BookDocument> {
    return await this.servise.create(createBook);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBook: IBook,
  ): Promise<IBook | null> {
    return await this.servise.update(id, updateBook);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<IBook | null> {
    return await this.servise.delete(id);
  }
}
