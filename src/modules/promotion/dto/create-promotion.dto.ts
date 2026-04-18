import { IsArray, IsDateString, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePromotionProductDto {
  @IsOptional()
  @IsMongoId()
  ma_san_pham: string;

  @IsOptional()
  @IsNumber()
  loai_giam: number;

  @IsNotEmpty()
  @IsNumber()
  gia_tri_giam: number;

  @IsOptional()
  @IsNumber()
  don_toi_thieu: number;

  @IsOptional()
  @IsNumber()
  so_lan_dung_toi_da: number;

  @IsOptional()
  @IsNumber()
  da_dung: number;
}

export class CreatePromotionDto {
  @IsNotEmpty()
  @IsString()
  ten_chuong_trinh: string;

  @IsNotEmpty()
  @IsString()
  ma_giam_gia: string;

  @IsOptional()
  @IsString()
  mo_ta: string;

  @IsNotEmpty()
  @IsDateString()
  ngay_bat_dau: string;

  @IsNotEmpty()
  @IsDateString()
  ngay_ket_thuc: string;

  @IsOptional()
  @IsNumber()
  trang_thai: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePromotionProductDto)
  danh_sach_san_pham: CreatePromotionProductDto[];
}
