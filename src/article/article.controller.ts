import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article-dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post('create')
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get('all')
  findAll(tag) {
    return this.articleService.findAll(tag);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.articleService.findOne(id);
  }

  @Put('update/:id')
  updateOne(@Param('id', ParseIntPipe) id:number, @Body() article:Partial<CreateArticleDto>){
    return this.articleService.updateOne(id,article)
  }

  @Delete('delete/:id')
  deleteOne(@Param('id', ParseIntPipe) id:number){
    return this.articleService.deleteOne(id)
  }
}
