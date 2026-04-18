import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    create(createCustomerDto: CreateCustomerDto): Promise<import("./schemas/customer.schema").Customer>;
    findAll(): Promise<import("./schemas/customer.schema").Customer[]>;
    findOne(id: number): Promise<import("./schemas/customer.schema").Customer>;
    update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<import("./schemas/customer.schema").Customer>;
    remove(id: number): Promise<import("./schemas/customer.schema").Customer>;
}
