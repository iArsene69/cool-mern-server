import { Schema, model } from "mongoose";

interface iBook {
  name: string;
  author: string;
  price: number;
  isbn: number;
}

const bookSchema = new Schema<iBook>({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isbn: {
    type: Number,
    required: true
  }
});

const book = model<iBook>("buku", bookSchema);

export default book;
