import { Document } from 'mongoose';
export type EmployeeDocument = Employee & Document;
export declare class Employee {
    ho_ten: string;
    email: string;
    mat_khau: string;
    so_dien_thoai: string;
    dia_chi: string;
    vai_tro: string;
    trang_thai: number;
}
export declare const EmployeeSchema: import("mongoose").Schema<Employee, import("mongoose").Model<Employee, any, any, any, any, any, Employee>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Employee, Document<unknown, {}, Employee, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Employee & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    ho_ten?: import("mongoose").SchemaDefinitionProperty<string, Employee, Document<unknown, {}, Employee, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Employee, Document<unknown, {}, Employee, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mat_khau?: import("mongoose").SchemaDefinitionProperty<string, Employee, Document<unknown, {}, Employee, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    so_dien_thoai?: import("mongoose").SchemaDefinitionProperty<string, Employee, Document<unknown, {}, Employee, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    dia_chi?: import("mongoose").SchemaDefinitionProperty<string, Employee, Document<unknown, {}, Employee, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    vai_tro?: import("mongoose").SchemaDefinitionProperty<string, Employee, Document<unknown, {}, Employee, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    trang_thai?: import("mongoose").SchemaDefinitionProperty<number, Employee, Document<unknown, {}, Employee, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Employee>;
