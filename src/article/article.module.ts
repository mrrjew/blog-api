import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  providers: [ArticleService, PrismaService],
  controllers: [ArticleController],
})
export class ArticleModule {}
