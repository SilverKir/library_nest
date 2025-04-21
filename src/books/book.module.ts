import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books.controllers';
import { BooksService } from './services/books.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
})
export class BookModule {}
