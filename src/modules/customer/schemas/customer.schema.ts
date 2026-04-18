import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema({ timestamps: { createdAt: 'ngay_dang_ky', updatedAt: false } })
export class Customer {

  @Prop({ required: true })
  ho_ten: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  mat_khau: string;

  @Prop()
  so_dien_thoai: string;

  @Prop({ default: 1 }) // 1: Hoạt động, 0: Khóa
  trang_thai: number;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
