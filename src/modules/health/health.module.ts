import { Module } from '@nestjs/common';

import { CommentsModule } from '../comments/comments.module';
import { HealthController } from './health.controller';

@Module({
  imports: [CommentsModule],
  controllers: [HealthController],
  providers: [],
})
export class healthModule {}
