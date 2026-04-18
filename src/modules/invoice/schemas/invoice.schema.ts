import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type InvoiceDocument = Invoice & Document;

@Schema({ _id: false })
export class InvoiceItem {
  @Prop({ type: Types.ObjectId, required: true })
  ma_bien_the: Types.ObjectId;

  @Prop({ required: true })
  ten_san_pham: string;

  @Prop()
  mau_sac: string;

  @Prop()
  kich_co: string;

  @Prop({ required: true })
  so_luong: number;

  @Prop({ required: true })
  don_gia: number;
}
export const InvoiceItemSchema = SchemaFactory.createForClass(InvoiceItem);

@Schema({ timestamps: { createdAt: 'ngay_xuat', updatedAt: false } })
export class Invoice {
  @Prop({ type: Types.ObjectId, ref: 'Order', required: true })
  ma_don_hang: Types.ObjectId;

  @Prop({ unique: true, required: true })
  so_hoa_don: string;

  @Prop({ required: true })
  tong_tien: number;

  @Prop({ type: [InvoiceItemSchema], default: [] })
  chi_tiet_hoa_don: InvoiceItem[];
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
