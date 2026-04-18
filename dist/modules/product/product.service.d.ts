import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(ma_san_pham: number): Promise<Product>;
    update(ma_san_pham: number, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(ma_san_pham: number): Promise<Product>;
}
