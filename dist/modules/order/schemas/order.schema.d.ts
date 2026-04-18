import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type OrderDocument = Order & Document;
export declare class Order {
    ma_gio_hang: mongoose.Schema.Types.ObjectId;
    ma_khach_hang: mongoose.Schema.Types.ObjectId;
    phuong_thuc_thanh_toan: number;
    trang_thai_thanh_toan: number;
    trang_thai_don_hang: number;
    dia_chi_nhan: string;
    ghi_chu: string;
    phi_van_chuyen: number;
    giam_gia: number;
    tong_tien_hang: number;
    thanh_tien: number;
}
export declare const OrderSchema: mongoose.Schema<Order, mongoose.Model<Order, any, any, any, any, any, Order>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Order, Document<unknown, {}, Order, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<Order & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    ma_gio_hang?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, Order, Document<unknown, {}, Order, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Order & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ma_khach_hang?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, Order, Document<unknown, {}, Order, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Order & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phuong_thuc_thanh_toan?: mongoose.SchemaDefinitionProperty<number, Order, Document<unknown, {}, Order, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Order & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    trang_thai_thanh_toan?: mongoose.SchemaDefinitionProperty<number, Order, Document<unknown, {}, Order, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Order & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    trang_thai_don_hang?: mongoose.SchemaDefinitionProperty<number, Order, Document<unknown, {}, Order, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Order & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    dia_chi_nhan?: mongoose.SchemaDefinitionProperty<string, Order, Document<unknown, {}, Order, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Order & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ghi_chu?: mongoose.SchemaDefinitionProperty<string, Order, Document<unknown, {}, Order, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Order & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phi_van_chuyen?: mongoose.SchemaDefinitionProperty<number, Order, Document<unknown, {}, Order, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Order & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    giam_gia?: mongoose.SchemaDefinitionProperty<number, Order, Document<unknown, {}, Order, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Order & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tong_tien_hang?: mongoose.SchemaDefinitionProperty<number, Order, Document<unknown, {}, Order, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Order & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    thanh_tien?: mongoose.SchemaDefinitionProperty<number, Order, Document<unknown, {}, Order, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Order & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Order>;
export declare class OrderDetail {
    ma_don_hang: mongoose.Schema.Types.ObjectId;
    ma_sp_chi_tiet: mongoose.Schema.Types.ObjectId;
    ma_khuyen_mai: mongoose.Schema.Types.ObjectId;
    so_luong: number;
    gia_goc: number;
    giam_gia: number;
    thanh_tien: number;
}
export type OrderDetailDocument = OrderDetail & Document;
export declare const OrderDetailSchema: mongoose.Schema<OrderDetail, mongoose.Model<OrderDetail, any, any, any, any, any, OrderDetail>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, OrderDetail, Document<unknown, {}, OrderDetail, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<OrderDetail & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    ma_don_hang?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, OrderDetail, Document<unknown, {}, OrderDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<OrderDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ma_sp_chi_tiet?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, OrderDetail, Document<unknown, {}, OrderDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<OrderDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ma_khuyen_mai?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, OrderDetail, Document<unknown, {}, OrderDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<OrderDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    so_luong?: mongoose.SchemaDefinitionProperty<number, OrderDetail, Document<unknown, {}, OrderDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<OrderDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    gia_goc?: mongoose.SchemaDefinitionProperty<number, OrderDetail, Document<unknown, {}, OrderDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<OrderDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    giam_gia?: mongoose.SchemaDefinitionProperty<number, OrderDetail, Document<unknown, {}, OrderDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<OrderDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    thanh_tien?: mongoose.SchemaDefinitionProperty<number, OrderDetail, Document<unknown, {}, OrderDetail, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<OrderDetail & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, OrderDetail>;
