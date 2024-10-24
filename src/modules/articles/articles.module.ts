import { Module } from '@nestjs/common';
import { CommentsModule } from 'src/modules/comments/comments.module';
import { UsersModule } from 'src/modules/users/users.module';

import { ArticlesController } from './articles.controller';
import { ArticlesService } from './services/articles.service';

@Module({
  imports: [CommentsModule, UsersModule],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
