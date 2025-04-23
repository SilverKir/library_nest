import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { IBook } from '../interfaces/dto';

export type BookDocument = Book & Document;

@Schema()
export class Book implements IBook {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  authors: string;

  @Prop()
  favorite: string;

  @Prop()
  fileCover: string;

  @Prop()
  fileName: string;

  @Prop()
  fileBook: string;
}

export const BookShema = SchemaFactory.createForClass(Book);
