import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books.controllers';
import { BooksService } from './services/books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookShema } from './models/books.models';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookShema }]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BookModule {}
