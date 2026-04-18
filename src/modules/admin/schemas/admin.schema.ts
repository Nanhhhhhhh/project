import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema({ timestamps: { createdAt: 'ngay_tao', updatedAt: false } })
export class Admin {

  @Prop({ required: true })
  ho_ten: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  mat_khau: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
