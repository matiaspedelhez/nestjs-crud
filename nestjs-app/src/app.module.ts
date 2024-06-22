import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

import { ProductSchema } from "./products/schema/product.schema";
import { ProductController } from "./products/products.controller";
import { ProductService } from "./products/products.service";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const host = config.get<string>("DB_HOST");
        const port = config.get<number>("DB_PORT");
        const user = config.get<string>("DB_USERNAME");
        const pwd = config.get<string>("DB_PASSWORD");
        const db = config.get<string>("DB_DATABASE");

        return {
          uri: `mongodb://${user}:${pwd}@${host}:${port}`,
          dbName: db,
        };
      },
    }),
    MongooseModule.forFeature([{ name: "Product", schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
