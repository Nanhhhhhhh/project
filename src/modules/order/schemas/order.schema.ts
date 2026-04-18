import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ _id: false })
export class OrderItem {
  @Prop({ type: Types.ObjectId, required: true })
  ma_sp_chi_tiet: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Promotion' })
  ma_khuyen_mai: Types.ObjectId;

  @Prop({ required: true, default: 1 })
  so_luong: number;

  @Prop({ required: true })
  gia_goc: number;

  @Prop({ default: 0 })
  giam_gia: number;

  @Prop({ required: true })
  thanh_tien: number;
}
export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);

@Schema({ timestamps: { createdAt: 'ngay_dat', updatedAt: false } })
export class Order {
  @Prop({ type: Types.ObjectId, ref: 'Customer', required: true })
  ma_khach_hang: Types.ObjectId;

  @Prop({ default: 1 }) // 1: COD, 2: Chuyển khoản
  phuong_thuc_thanh_toan: number;

  @Prop({ default: 1 }) // 1: Chưa TT, 2: Đã TT
  trang_thai_thanh_toan: number;

  @Prop({ default: 1 }) // 1: Chờ XN, 2: Đã XN, 3: Đang giao, 4: Đã giao, 5: Đã hủy
  trang_thai_don_hang: number;

  @Prop()
  dia_chi_nhan: string;

  @Prop()
  ghi_chu: string;

  @Prop({ default: 0 })
  phi_van_chuyen: number;

  @Prop({ default: 0 })
  giam_gia: number;

  @Prop({ default: 0 })
  tong_tien_hang: number;

  @Prop({ default: 0 })
  thanh_tien: number;

  @Prop({ type: [OrderItemSchema], default: [] })
  chi_tiet_don_hang: OrderItem[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
