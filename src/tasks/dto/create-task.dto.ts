import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  title: string;
}
