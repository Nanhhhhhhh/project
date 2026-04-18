import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Min } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  ho_ten: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 255)
  mat_khau: string;

  @IsOptional()
  @IsString()
  @Length(0, 15)
  so_dien_thoai: string;

  @IsOptional()
  @IsNumber()
  trang_thai?: number;
}
