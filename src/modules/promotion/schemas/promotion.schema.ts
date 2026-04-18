import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PromotionDocument = Promotion & Document;

@Schema({ _id: false })
export class PromotionProduct {
  @Prop({ type: Types.ObjectId, ref: 'Product' }) // NULL if applies to all
  ma_san_pham: Types.ObjectId;

  @Prop({ default: 1 }) // 1: Giảm %, 2: Giảm tiền mặt
  loai_giam: number;

  @Prop({ required: true })
  gia_tri_giam: number;

  @Prop({ default: 0 })
  don_toi_thieu: number;

  @Prop({ default: 0 })
  so_lan_dung_toi_da: number;

  @Prop({ default: 0 })
  da_dung: number;
}
export const PromotionProductSchema = SchemaFactory.createForClass(PromotionProduct);

@Schema()
export class Promotion {

  @Prop({ required: true })
  ten_chuong_trinh: string;

  @Prop({ unique: true, required: true })
  ma_giam_gia: string;

  @Prop()
  mo_ta: string;

  @Prop({ required: true })
  ngay_bat_dau: Date;

  @Prop({ required: true })
  ngay_ket_thuc: Date;

  @Prop({ default: 1 }) // 1: Đang áp dụng, 0: Ngừng
  trang_thai: number;

  @Prop({ type: [PromotionProductSchema], default: [] })
  danh_sach_san_pham: PromotionProduct[];
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion);
