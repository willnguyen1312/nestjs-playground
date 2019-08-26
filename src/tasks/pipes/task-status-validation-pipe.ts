import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  private readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any) {
    if (typeof value === 'string') {
      value = value.toUpperCase();
    }

    if (!this.checkStatus(value)) {
      throw new BadRequestException(`${value} is an invalid status`);
    }

    return value;
  }

  private checkStatus(status: any) {
    return this.allowedStatuses.includes(status);
  }
}
