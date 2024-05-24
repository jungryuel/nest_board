import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentRequestDto } from './dto/commentRequest';
import { Comment } from './comment.entity';

@Controller('/api/boards')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('/:Board_id/comments')
  async writeComment(
    @Param('Board_id') boardId: number,
    @Body() commentDto: CommentRequestDto,
  ): Promise<void> {
    await this.commentService.writeComment(boardId, commentDto);
  }

  @Put('/:Board_id/comments/:comment_id')
  async updateComment(
    @Param('Board_id') boardId: number,
    @Param('comment_id') commentId: number,
    @Body() boardDto: CommentRequestDto,
  ): Promise<void> {
    await this.commentService.updateComment(boardId, commentId, boardDto);
  }

  @Delete('/:Board_id/comments/:comment_id')
  async deleteComment(
    @Param('Board_id') boardId: number,
    @Param('comment_id') commentId: number,
  ): Promise<void> {
    await this.commentService.deleteComment(boardId, commentId);
  }

  @Get('/:Board_id/comments')
  async getAllComments(@Param('Board_id') boardId: number): Promise<Comment[]> {
    return await this.commentService.getAllComments(boardId);
  }
}
