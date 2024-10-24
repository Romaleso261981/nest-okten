import { Injectable } from '@nestjs/common';

import { CreateCommentDto } from '../models/dto/create-comment.dto';

@Injectable()
export class CommentsService {
  create(createCommentDto: CreateCommentDto) {
    return { createCommentDto };
  }
  findAll() {
    return `This action returns all comments`;
  }
  deleteAllCommentsForArticle(articleId: string) {
    return { articleId };
  }
}
