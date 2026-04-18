import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type InvoiceDocument = Invoice & Document;
export declare class Invoice {
    ma_don_hang: mongoose.Schema.Types.ObjectId;
    so_hoa_don: string;
    tong_tien: number;
}
export declare const InvoiceSchema: mongoose.Schema<Invoice, mongoose.Model<Invoice, any, any, any, any, any, Invoice>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Invoice, Document<unknown, {}, Invoice, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<Invoice & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    ma_don_hang?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, Invoice, Document<unknown, {}, Invoice, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Invoice & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    so_hoa_don?: mongoose.SchemaDefinitionProperty<string, Invoice, Document<unknown, {}, Invoice, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Invoice & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tong_tien?: mongoose.SchemaDefinitionProperty<number, Invoice, Document<unknown, {}, Invoice, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Invoice & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Invoice>;
export declare class InvoiceDetail {
    ma_hoa_don: mongoose.Schema.Types.ObjectId;
    ma_bien_the: mongoose.Schema.Types.ObjectId;
    ten_san_pham: string;
    mau_sac: string;
    kich_co: string;
    so_luong: number;
    don_gia: number;
}
export type InvoiceDetailDocument = InvoiceDetail & Document;
export declare const InvoiceDetailSchema: mongoose.Schema<InvoiceDetail, mongoose.Model<InvoiceDetail, any, any, any, any, any, InvoiceDetail>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, InvoiceDetail, Document<unknown, {}, InvoiceDetail, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<InvoiceDetail & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    ma_hoa_don?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, InvoiceDetail, Document<unknown, {}, InvoiceDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<InvoiceDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ma_bien_the?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, InvoiceDetail, Document<unknown, {}, InvoiceDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<InvoiceDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ten_san_pham?: mongoose.SchemaDefinitionProperty<string, InvoiceDetail, Document<unknown, {}, InvoiceDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<InvoiceDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mau_sac?: mongoose.SchemaDefinitionProperty<string, InvoiceDetail, Document<unknown, {}, InvoiceDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<InvoiceDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    kich_co?: mongoose.SchemaDefinitionProperty<string, InvoiceDetail, Document<unknown, {}, InvoiceDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<InvoiceDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    so_luong?: mongoose.SchemaDefinitionProperty<number, InvoiceDetail, Document<unknown, {}, InvoiceDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<InvoiceDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    don_gia?: mongoose.SchemaDefinitionProperty<number, InvoiceDetail, Document<unknown, {}, InvoiceDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<InvoiceDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, InvoiceDetail>;
