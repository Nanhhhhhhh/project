import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type ReviewDocument = Review & Document;
export declare class Review {
    ma_khach_hang: mongoose.Schema.Types.ObjectId;
    ma_sp_chi_tiet: mongoose.Schema.Types.ObjectId;
    ma_don_hang: mongoose.Schema.Types.ObjectId;
    so_sao: number;
    binh_luan: string;
    trang_thai: number;
}
export declare const ReviewSchema: mongoose.Schema<Review, mongoose.Model<Review, any, any, any, any, any, Review>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Review, Document<unknown, {}, Review, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<Review & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    ma_khach_hang?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, Review, Document<unknown, {}, Review, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Review & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ma_sp_chi_tiet?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, Review, Document<unknown, {}, Review, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Review & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ma_don_hang?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, Review, Document<unknown, {}, Review, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Review & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    so_sao?: mongoose.SchemaDefinitionProperty<number, Review, Document<unknown, {}, Review, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Review & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    binh_luan?: mongoose.SchemaDefinitionProperty<string, Review, Document<unknown, {}, Review, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Review & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    trang_thai?: mongoose.SchemaDefinitionProperty<number, Review, Document<unknown, {}, Review, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Review & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Review>;
