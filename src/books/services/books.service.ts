import { Injectable } from '@nestjs/common';
import { IBook } from '../interfaces/dto/IBook';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from '../models/books.models';
import { Connection, Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private BookModel: Model<BookDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  create(data: IBook): Promise<BookDocument> {
    const book = new this.BookModel(data);
    return book.save();
  }

  findAll(): IBook[] {
    return this.books;
  }

  findById(id: string): IBook | undefined {
    return this.books.find((el) => el.id === id);
  }

  update(id: string, book: IBook) {
    const index = this.books.findIndex((el) => el.id === id);
    if (typeof index != 'undefined') {
      this.books[index] = book;
      this.books[index].id = id;
    } else {
      throw new Error('Wrong id');
    }
  }
  delete(id: string) {
    this.books = this.books.filter((el) => el.id != id);
  }
}
