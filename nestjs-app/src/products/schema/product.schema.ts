import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongodb";
@Schema()
export class Product {
  @Prop()
  id: ObjectId;
  @Prop()
  name: string;
  @Prop()
  stock: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
