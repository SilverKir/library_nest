import { IBook, ICreateBook } from '../interfaces/books.interface';
import { v4 as uuid } from 'uuid';

export class Book implements IBook {
  id: string;
  title: string;
  description: string;
  authors: string;
  favorite: string;
  fileCover: string;
  fileName: string;
  fileBook: string;

  constructor(newBook: ICreateBook) {
    this.id = uuid();
    this.title = newBook.title;
    this.description = newBook.description ?? '';
    this.authors = newBook.authors ?? '';
    this.favorite = newBook.favorite ?? '';
    this.fileCover = newBook.fileCover ?? '';
    this.fileName = newBook.fileName ?? '';
    this.fileBook = newBook.fileBook ?? '';
  }
}
