import { Document } from 'mongoose';
export type AdminDocument = Admin & Document;
export declare class Admin {
    ho_ten: string;
    email: string;
    mat_khau: string;
}
export declare const AdminSchema: import("mongoose").Schema<Admin, import("mongoose").Model<Admin, any, any, any, any, any, Admin>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Admin, Document<unknown, {}, Admin, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Admin & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    ho_ten?: import("mongoose").SchemaDefinitionProperty<string, Admin, Document<unknown, {}, Admin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Admin, Document<unknown, {}, Admin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mat_khau?: import("mongoose").SchemaDefinitionProperty<string, Admin, Document<unknown, {}, Admin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Admin>;
