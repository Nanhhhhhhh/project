import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
export type ProductVariantDocument = ProductVariant & Document;
export declare class ProductVariant {
    ma_san_pham: mongoose.Schema.Types.ObjectId;
    mau_sac: string;
    kich_co: string;
    gia_ban: number;
    so_luong_ton: number;
    hinh_anh: string;
}
export declare const ProductVariantSchema: mongoose.Schema<ProductVariant, mongoose.Model<ProductVariant, any, any, any, any, any, ProductVariant>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ProductVariant, Document<unknown, {}, ProductVariant, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ProductVariant & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    ma_san_pham?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, ProductVariant, Document<unknown, {}, ProductVariant, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ProductVariant & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mau_sac?: mongoose.SchemaDefinitionProperty<string, ProductVariant, Document<unknown, {}, ProductVariant, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ProductVariant & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    kich_co?: mongoose.SchemaDefinitionProperty<string, ProductVariant, Document<unknown, {}, ProductVariant, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ProductVariant & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    gia_ban?: mongoose.SchemaDefinitionProperty<number, ProductVariant, Document<unknown, {}, ProductVariant, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ProductVariant & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    so_luong_ton?: mongoose.SchemaDefinitionProperty<number, ProductVariant, Document<unknown, {}, ProductVariant, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ProductVariant & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hinh_anh?: mongoose.SchemaDefinitionProperty<string, ProductVariant, Document<unknown, {}, ProductVariant, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ProductVariant & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ProductVariant>;
