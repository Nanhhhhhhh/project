import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';

export type ReviewDocument = Review & Document;

@Schema({ timestamps: { createdAt: 'ngay_danh_gia', updatedAt: false } })
export class Review {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true })
  ma_khach_hang: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
  ma_sp_chi_tiet: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true })
  ma_don_hang: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true, min: 1, max: 5 })
  so_sao: number;

  @Prop()
  binh_luan: string;

  @Prop({ default: 1 })
  trang_thai: number;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
