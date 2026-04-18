import { IsNotEmpty, IsMongoId, IsNumber, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCartItemDto {
  @IsNotEmpty()
  @IsMongoId()
  ma_sp_chi_tiet: string;

  @IsNotEmpty()
  @IsNumber()
  so_luong: number;
}

export class CreateCartDto {
  @IsNotEmpty()
  @IsMongoId()
  ma_khach_hang: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCartItemDto)
  items: CreateCartItemDto[];
}
