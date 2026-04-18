import { IsArray, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderItemDto {
  @IsNotEmpty()
  @IsMongoId()
  ma_sp_chi_tiet: string;

  @IsOptional()
  @IsMongoId()
  ma_khuyen_mai: string;

  @IsNotEmpty()
  @IsNumber()
  so_luong: number;

  @IsNotEmpty()
  @IsNumber()
  gia_goc: number;

  @IsOptional()
  @IsNumber()
  giam_gia: number;

  @IsNotEmpty()
  @IsNumber()
  thanh_tien: number;
}

export class CreateOrderDto {
  @IsNotEmpty()
  @IsMongoId()
  ma_khach_hang: string;

  @IsOptional()
  @IsNumber()
  phuong_thuc_thanh_toan: number;

  @IsOptional()
  @IsNumber()
  trang_thai_thanh_toan: number;

  @IsOptional()
  @IsNumber()
  trang_thai_don_hang: number;

  @IsOptional()
  @IsString()
  dia_chi_nhan: string;

  @IsOptional()
  @IsString()
  ghi_chu: string;

  @IsOptional()
  @IsNumber()
  phi_van_chuyen: number;

  @IsOptional()
  @IsNumber()
  giam_gia: number;

  @IsOptional()
  @IsNumber()
  tong_tien_hang: number;

  @IsOptional()
  @IsNumber()
  thanh_tien: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  chi_tiet_don_hang: CreateOrderItemDto[];
}
