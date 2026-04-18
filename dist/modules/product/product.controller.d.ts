import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<import("./schemas/product.schema").Product>;
    findAll(): Promise<import("./schemas/product.schema").Product[]>;
    findOne(id: number): Promise<import("./schemas/product.schema").Product>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<import("./schemas/product.schema").Product>;
    remove(id: number): Promise<import("./schemas/product.schema").Product>;
}
