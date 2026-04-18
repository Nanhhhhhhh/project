import { IsNotEmpty, IsNumber, IsOptional, IsString, Length, Min, Max, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductVariantDto {
  @IsNotEmpty()
  @IsString()
  mau_sac: string;

  @IsNotEmpty()
  @IsString()
  kich_co: string;

  @IsNotEmpty()
  @IsNumber()
  gia_ban: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  so_luong_ton: number;

  @IsOptional()
  @IsString()
  hinh_anh: string;
}

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 200)
  ten_san_pham: string;

  @IsOptional()
  @IsString()
  mo_ta: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(3)
  gioi_tinh: number;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  danh_muc: string;

  @IsOptional()
  @IsNumber()
  trang_thai: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductVariantDto)
  bien_the: CreateProductVariantDto[];
}
