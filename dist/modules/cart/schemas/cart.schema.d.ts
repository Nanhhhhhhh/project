import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type CartDocument = Cart & Document;
export declare class Cart {
    ma_khach_hang: mongoose.Schema.Types.ObjectId;
}
export declare const CartSchema: mongoose.Schema<Cart, mongoose.Model<Cart, any, any, any, any, any, Cart>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Cart, Document<unknown, {}, Cart, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<Cart & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    ma_khach_hang?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, Cart, Document<unknown, {}, Cart, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Cart & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Cart>;
export declare class CartDetail {
    ma_gio_hang: mongoose.Schema.Types.ObjectId;
    ma_sp_chi_tiet: mongoose.Schema.Types.ObjectId;
    so_luong: number;
}
export type CartDetailDocument = CartDetail & Document;
export declare const CartDetailSchema: mongoose.Schema<CartDetail, mongoose.Model<CartDetail, any, any, any, any, any, CartDetail>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, CartDetail, Document<unknown, {}, CartDetail, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<CartDetail & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    ma_gio_hang?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, CartDetail, Document<unknown, {}, CartDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<CartDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ma_sp_chi_tiet?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, CartDetail, Document<unknown, {}, CartDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<CartDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    so_luong?: mongoose.SchemaDefinitionProperty<number, CartDetail, Document<unknown, {}, CartDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<CartDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, CartDetail>;
