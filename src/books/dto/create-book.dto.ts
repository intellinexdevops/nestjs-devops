import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ example: 'Chenter PHAI' })
  author: string;

  @ApiProperty({ example: '2025' })
  realYears: string;

  @ApiProperty({ example: '2025' })
  year: string;

  @ApiProperty({ example: 'United States' })
  country: string;

  @ApiProperty({ example: 'English' })
  language: string;

  @ApiProperty({ example: 0.0 })
  price: number;

  @ApiProperty()
  pages: number;

  @ApiProperty()
  wikipediaLink: string;

  @ApiProperty()
  imageUrl: string;
}
