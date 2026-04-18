import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSupportDto {
  @IsNotEmpty()
  @IsMongoId()
  ma_khach_hang: string;

  @IsOptional()
  @IsMongoId()
  ma_don_hang: string;

  @IsNotEmpty()
  @IsString()
  noi_dung: string;

  @IsOptional()
  @IsMongoId()
  ma_nhan_vien_xu_ly: string;

  @IsOptional()
  @IsMongoId()
  ma_admin_xu_ly: string;

  @IsOptional()
  @IsNumber()
  trang_thai: number;
}
