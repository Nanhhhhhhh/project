import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer, CustomerDocument } from './schemas/customer.schema';
export declare class CustomerService {
    private customerModel;
    constructor(customerModel: Model<CustomerDocument>);
    create(createCustomerDto: CreateCustomerDto): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    findOne(ma_khach_hang: number): Promise<Customer>;
    update(ma_khach_hang: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer>;
    remove(ma_khach_hang: number): Promise<Customer>;
}
