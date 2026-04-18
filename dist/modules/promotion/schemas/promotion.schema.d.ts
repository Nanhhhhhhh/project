import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type PromotionDocument = Promotion & Document;
export declare class Promotion {
    ten_chuong_trinh: string;
    ma_giam_gia: string;
    mo_ta: string;
    ngay_bat_dau: Date;
    ngay_ket_thuc: Date;
    trang_thai: number;
}
export declare const PromotionSchema: mongoose.Schema<Promotion, mongoose.Model<Promotion, any, any, any, any, any, Promotion>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Promotion, Document<unknown, {}, Promotion, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<Promotion & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    ten_chuong_trinh?: mongoose.SchemaDefinitionProperty<string, Promotion, Document<unknown, {}, Promotion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Promotion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ma_giam_gia?: mongoose.SchemaDefinitionProperty<string, Promotion, Document<unknown, {}, Promotion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Promotion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mo_ta?: mongoose.SchemaDefinitionProperty<string, Promotion, Document<unknown, {}, Promotion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Promotion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ngay_bat_dau?: mongoose.SchemaDefinitionProperty<Date, Promotion, Document<unknown, {}, Promotion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Promotion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ngay_ket_thuc?: mongoose.SchemaDefinitionProperty<Date, Promotion, Document<unknown, {}, Promotion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Promotion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    trang_thai?: mongoose.SchemaDefinitionProperty<number, Promotion, Document<unknown, {}, Promotion, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Promotion & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Promotion>;
export declare class PromotionProduct {
    ma_khuyen_mai: mongoose.Schema.Types.ObjectId;
    ma_san_pham: mongoose.Schema.Types.ObjectId;
    loai_giam: number;
    gia_tri_giam: number;
    don_toi_thieu: number;
    so_lan_dung_toi_da: number;
    da_dung: number;
}
export type PromotionProductDocument = PromotionProduct & Document;
export declare const PromotionProductSchema: mongoose.Schema<PromotionProduct, mongoose.Model<PromotionProduct, any, any, any, any, any, PromotionProduct>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, PromotionProduct, Document<unknown, {}, PromotionProduct, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<PromotionProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    ma_khuyen_mai?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, PromotionProduct, Document<unknown, {}, PromotionProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<PromotionProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ma_san_pham?: mongoose.SchemaDefinitionProperty<mongoose.Schema.Types.ObjectId, PromotionProduct, Document<unknown, {}, PromotionProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<PromotionProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    loai_giam?: mongoose.SchemaDefinitionProperty<number, PromotionProduct, Document<unknown, {}, PromotionProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<PromotionProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    gia_tri_giam?: mongoose.SchemaDefinitionProperty<number, PromotionProduct, Document<unknown, {}, PromotionProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<PromotionProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    don_toi_thieu?: mongoose.SchemaDefinitionProperty<number, PromotionProduct, Document<unknown, {}, PromotionProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<PromotionProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    so_lan_dung_toi_da?: mongoose.SchemaDefinitionProperty<number, PromotionProduct, Document<unknown, {}, PromotionProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<PromotionProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    da_dung?: mongoose.SchemaDefinitionProperty<number, PromotionProduct, Document<unknown, {}, PromotionProduct, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<PromotionProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, PromotionProduct>;
