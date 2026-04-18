import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateAdminDto {
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
}
