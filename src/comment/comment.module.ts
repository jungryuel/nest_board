import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { Comment } from './comment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from 'src/board/board.repository';
import { BoardModule } from 'src/board/board.module';
import { Board } from 'src/board/board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Board]), BoardModule],
  providers: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
