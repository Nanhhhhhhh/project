import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CartDocument = Cart & Document;

@Schema({ _id: false })
export class CartItem {
  @Prop({ type: Types.ObjectId, required: true }) // Using generic ObjectId reference since variants will be inside Product
  ma_sp_chi_tiet: Types.ObjectId;

  @Prop({ required: true, default: 1 })
  so_luong: number;
}
export const CartItemSchema = SchemaFactory.createForClass(CartItem);

@Schema({ timestamps: { createdAt: 'ngay_tao', updatedAt: false } })
export class Cart {
  @Prop({ type: Types.ObjectId, ref: 'Customer', required: true, unique: true })
  ma_khach_hang: Types.ObjectId;

  @Prop({ type: [CartItemSchema], default: [] })
  items: CartItem[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);
