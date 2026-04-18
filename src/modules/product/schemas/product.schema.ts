import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class ProductVariant {
  // `_id` will be automatically generated for variants so they can be referenced in Orders/Carts
  @Prop({ required: true })
  mau_sac: string;

  @Prop({ required: true })
  kich_co: string;

  @Prop({ type: Number, required: true })
  gia_ban: number;

  @Prop({ type: Number, default: 0 })
  so_luong_ton: number;

  @Prop()
  hinh_anh: string;
}
export const ProductVariantSchema = SchemaFactory.createForClass(ProductVariant);

@Schema()
export class Product {

  @Prop({ required: true })
  ten_san_pham: string;

  @Prop()
  mo_ta: string;

  @Prop({ default: 3 }) // 1: Nam, 2: Nữ, 3: Unisex
  gioi_tinh: number;

  @Prop()
  danh_muc: string;

  @Prop({ default: 1 }) // 1: Còn kinh doanh, 0: Ngừng kinh doanh
  trang_thai: number;

  @Prop({ type: [ProductVariantSchema], default: [] })
  bien_the: ProductVariant[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
