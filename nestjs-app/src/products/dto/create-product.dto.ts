import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class CreateProductDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;
}
