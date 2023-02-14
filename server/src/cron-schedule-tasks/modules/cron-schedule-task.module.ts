import { Module } from '@nestjs/common';
import { CronScheduleTaskService } from './cron-schedule-task.service';

@Module({
  providers: [CronScheduleTaskService],
})
export class CronScheduleTaskModule {}