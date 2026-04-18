import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema({ timestamps: { createdAt: 'ngay_tao', updatedAt: false } })
export class Employee {

  @Prop({ required: true })
  ho_ten: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  mat_khau: string;

  @Prop()
  so_dien_thoai: string;

  @Prop()
  dia_chi: string;

  @Prop({ default: '' })
  vai_tro: string;

  @Prop({ default: 1 }) // 1: Đang làm, 0: Đã nghỉ
  trang_thai: number;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
