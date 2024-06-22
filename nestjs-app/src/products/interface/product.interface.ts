import { ObjectId } from "mongodb";
import { Document } from "mongoose";
export interface IProduct extends Document {
  readonly id: ObjectId;
  readonly name: string;
  readonly stock: number;
}
