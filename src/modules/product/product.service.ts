import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(ma_san_pham: number): Promise<Product> {
    const product = await this.productModel.findOne({ ma_san_pham }).exec();
    if (!product) {
      throw new NotFoundException(`Product with ID ${ma_san_pham} not found`);
    }
    return product;
  }

  async update(ma_san_pham: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const updatedProduct = await this.productModel
      .findOneAndUpdate({ ma_san_pham }, updateProductDto, { new: true })
      .exec();
    if (!updatedProduct) {
      throw new NotFoundException(`Product with ID ${ma_san_pham} not found`);
    }
    return updatedProduct;
  }

  async remove(ma_san_pham: number): Promise<Product> {
    const deletedProduct = await this.productModel
      .findOneAndDelete({ ma_san_pham })
      .exec();
    if (!deletedProduct) {
      throw new NotFoundException(`Product with ID ${ma_san_pham} not found`);
    }
    return deletedProduct;
  }
}
