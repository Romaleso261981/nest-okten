import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ArticleID, UserID } from 'src/common/types/entity-ids.type';

import { Config } from '../../../configs/config.type';
import { ArticleRepository } from '../../repository/services/article.repository';
import { UserRepository } from '../../repository/services/user.repository';
import { UpdateUserReqDto } from '../models/dto/req/update-user.req.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly configService: ConfigService<Config>,
    private userRepository: UserRepository,
    private articleRepository: ArticleRepository,
  ) {}

  findOne(id: UserID) {
    return `This action returns a #${id} user`;
  }

  update(id: UserID, updateUserDto: UpdateUserReqDto) {
    return `This action updates a #${id} ${updateUserDto} user`;
  }

  remove(id: UserID) {
    return `This action removes a #${id} user`;
  }

  public async checkAbilityToEditArticle(userId: UserID, articleId: ArticleID) {
    const article = await this.articleRepository.findOne({
      where: { id: articleId },
    });
    return `Check if the user ${userId}has permission to edit the article${article}`;
  }
}
