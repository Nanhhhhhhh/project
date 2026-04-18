import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type SupportDocument = Support & Document;
export declare class Support {
    ma_khach_hang: mongoose.Schema.Types.ObjectId;
    ma_don_hang: mongoose.Schema.Types.ObjectId;
    noi_dung: string;
    ma_nhan_vien_xu_ly: mongoose.Schema.Types.ObjectId;
    ma_admin_xu_ly: mongoose.Schema.Types.ObjectId;
    trang_thai: number;
}
export declare const SupportSchema: mongoose.Schema<Support, mongoose.Model<Support, any, any, any, any, any, Support>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Support, Document<unknown, {}, Support, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<Support & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    ma_khach_hang?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, Support, Document<unknown, {}, Support, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Support & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ma_don_hang?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, Support, Document<unknown, {}, Support, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Support & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    noi_dung?: mongoose.SchemaDefinitionProperty<string, Support, Document<unknown, {}, Support, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Support & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ma_nhan_vien_xu_ly?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, Support, Document<unknown, {}, Support, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Support & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ma_admin_xu_ly?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, Support, Document<unknown, {}, Support, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Support & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    trang_thai?: mongoose.SchemaDefinitionProperty<number, Support, Document<unknown, {}, Support, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Support & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Support>;
