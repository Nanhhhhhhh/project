import { Model } from 'mongoose';
import { OrderDocument, OrderDetailDocument } from './schemas/order.schema';
export declare class OrderService {
    private orderModel;
    private orderDetailModel;
    constructor(orderModel: Model<OrderDocument>, orderDetailModel: Model<OrderDetailDocument>);
}
