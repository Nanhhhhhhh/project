import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type SupportDocument = Support & Document;

@Schema({ timestamps: { createdAt: 'ngay_gui_yeu_cau', updatedAt: false } })
export class Support {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true })
  ma_khach_hang: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order' })
  ma_don_hang: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  noi_dung: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' })
  ma_nhan_vien_xu_ly: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Admin' })
  ma_admin_xu_ly: mongoose.Schema.Types.ObjectId;

  @Prop({ default: 0 }) // 1: Đã xử lý, 0: Chưa xử lý
  trang_thai: number;
}

export const SupportSchema = SchemaFactory.createForClass(Support);
