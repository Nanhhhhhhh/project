import { Document } from 'mongoose';
export type CustomerDocument = Customer & Document;
export declare class Customer {
    ho_ten: string;
    email: string;
    mat_khau: string;
    so_dien_thoai: string;
    trang_thai: number;
}
export declare const CustomerSchema: import("mongoose").Schema<Customer, import("mongoose").Model<Customer, any, any, any, any, any, Customer>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Customer, Document<unknown, {}, Customer, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Customer & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    ho_ten?: import("mongoose").SchemaDefinitionProperty<string, Customer, Document<unknown, {}, Customer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Customer, Document<unknown, {}, Customer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mat_khau?: import("mongoose").SchemaDefinitionProperty<string, Customer, Document<unknown, {}, Customer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    so_dien_thoai?: import("mongoose").SchemaDefinitionProperty<string, Customer, Document<unknown, {}, Customer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    trang_thai?: import("mongoose").SchemaDefinitionProperty<number, Customer, Document<unknown, {}, Customer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Customer>;
