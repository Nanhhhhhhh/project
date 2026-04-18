import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsMongoId()
  ma_khach_hang: string;

  @IsNotEmpty()
  @IsMongoId()
  ma_sp_chi_tiet: string;

  @IsNotEmpty()
  @IsMongoId()
  ma_don_hang: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(5)
  so_sao: number;

  @IsOptional()
  @IsString()
  binh_luan: string;

  @IsOptional()
  @IsNumber()
  trang_thai: number;
}
