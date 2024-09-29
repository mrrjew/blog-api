import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  writer: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  tag: string;
}
