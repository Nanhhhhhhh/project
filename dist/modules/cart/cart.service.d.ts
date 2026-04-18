import { Model } from 'mongoose';
import { CartDocument, CartDetailDocument } from './schemas/cart.schema';
export declare class CartService {
    private cartModel;
    private cartDetailModel;
    constructor(cartModel: Model<CartDocument>, cartDetailModel: Model<CartDetailDocument>);
}
