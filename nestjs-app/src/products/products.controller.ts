import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from "@nestjs/common";

import { CreateProductDto } from "src/products/dto/create-product.dto";
import { UpdateProductDto } from "src/products/dto/update-product.dto";
import { ProductService } from "./products.service";

import { ParseObjectIdPipe } from "src/helpers/pipe/validate-objectid-pipe.pipe";

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(
    @Res() response,
    @Body() createProductDto: CreateProductDto
  ) {
    try {
      const newProduct = await this.productService.createProduct(
        createProductDto
      );
      return response.status(HttpStatus.CREATED).json(newProduct);
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: "Error: Product not created!",
        error: "Bad Request",
      });
    }
  }

  @Patch(":id")
  async updateProduct(
    @Res() response,
    @Param("id", ParseObjectIdPipe) productId: string,
    @Body() updateProductDto: UpdateProductDto
  ) {
    try {
      const existingProduct = await this.productService.updateProduct(
        productId,
        updateProductDto
      );
      return response.status(HttpStatus.OK).json(existingProduct);
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get()
  async getProducts(@Res() response) {
    try {
      const productData = await this.productService.getAllProducts();
      return response.status(HttpStatus.OK).json(productData);
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get(":id")
  async getProduct(
    @Res() response,
    @Param("id", ParseObjectIdPipe) productId: string
  ) {
    try {
      const existingProduct = await this.productService.getProduct(productId);
      return response.status(HttpStatus.OK).json(existingProduct);
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete(":id")
  async deleteProduct(
    @Res() response,
    @Param("id", ParseObjectIdPipe) productId: string
  ) {
    try {
      const deletedProduct = await this.productService.deleteProduct(productId);
      return response.status(HttpStatus.OK).json(deletedProduct);
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
