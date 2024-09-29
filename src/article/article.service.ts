import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private prismaService: PrismaService) {}

  async create(article) {
    try {
      const _article = await this.prismaService.article.create({
        data: article,
      });
      return _article;
    } catch (e) {
      console.log(e);
      throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST, {
        cause: e,
      });
    }
  }

  async findAll(tag?: string) {
    try {
      const articles = await this.prismaService.article.findMany({
        // where: {
        //     tag
        // }
      });
      return articles;
    } catch (e) {
      throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST, {
        cause: e,
      });
    }
  }

  async findOne(id: number) {
    try {
      const _article = await this.prismaService.article.findUnique({
        where: { id },
      });
      if (!_article) {
        throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
      }
      return _article;
    } catch (e) {
      throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST, {
        cause: e,
      });
    }
  }

  async updateOne(id:number,article) {
    try{
        const _article = await this.prismaService.article.update(
            {where:{id},data:article}
        )

        if (!_article) {
            throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
          }

        return article
    }catch (e) {
        console.log(e)
      throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST, {
        cause: e,
      });
    }
  }

  async deleteOne(id:number) {
    try{
        const _article = await this.prismaService.article.delete({
            where:{id}
        })

        if (!_article) {
            throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
          }

        return `Article ${id} deleted successfully`
    }catch (e) {
      throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST, {
        cause: e,
      });
    }
  }
}
