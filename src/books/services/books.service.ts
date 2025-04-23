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

  async create(data: IBook): Promise<BookDocument> {
    const book = new this.BookModel(data);
    return await book.save();
  }

  async findAll(): Promise<BookDocument[]> {
    return await this.BookModel.find().select('-__v').exec();
  }

  async findById(id: string): Promise<BookDocument | null> {
    return await this.BookModel.findOne({ _id: id }).select('-__v').exec();
  }

  async update(id: string, book: IBook): Promise<BookDocument | null> {
    return await this.BookModel.findOneAndUpdate({ _id: id }, book)
      .select('-__v')
      .exec();
  }

  async delete(id: string): Promise<BookDocument | null> {
    return await this.BookModel.findByIdAndDelete(id);
  }
}
