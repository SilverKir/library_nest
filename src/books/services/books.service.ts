import { Injectable } from '@nestjs/common';
import { IBook } from '../interfaces/books.interface';

@Injectable()
export class BooksService {
  private books: IBook[] = [];

  create(book: IBook) {
    this.books.push(book);
  }

  findAll(): IBook[] {
    return this.books;
  }

  findById(id: string): IBook | undefined {
    return this.books.find((el) => el.id === id);
  }

  update(id: string, book: IBook) {
    const index = this.books.findIndex((el) => el.id === id);
    if (index) {
      this.books[index] = book;
    }
  }

  delete(id: string) {
    this.books = this.books.filter((el) => el.id != id);
  }
}
