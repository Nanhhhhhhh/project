import { IsArray, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateInvoiceItemDto {
  @IsNotEmpty()
  @IsMongoId()
  ma_bien_the: string;

  @IsNotEmpty()
  @IsString()
  ten_san_pham: string;

  @IsOptional()
  @IsString()
  mau_sac: string;

  @IsOptional()
  @IsString()
  kich_co: string;

  @IsNotEmpty()
  @IsNumber()
  so_luong: number;

  @IsNotEmpty()
  @IsNumber()
  don_gia: number;
}

export class CreateInvoiceDto {
  @IsNotEmpty()
  @IsMongoId()
  ma_don_hang: string;

  @IsNotEmpty()
  @IsString()
  so_hoa_don: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  tong_tien: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateInvoiceItemDto)
  chi_tiet_hoa_don: CreateInvoiceItemDto[];
}
