import { Injectable, NotFoundException } from '@nestjs/common';
import { Comment } from './comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentRequestDto } from './dto/commentRequest';
import { Board } from 'src/board/board.entity';
import { CommentResponseDto } from './dto/commentResponse';
import { BoardRepository } from 'src/board/board.repository';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(Board)
    private readonly boardRepository: BoardRepository,
  ) {}

  async writeComment(
    boardId: number,
    commentDto: CommentRequestDto,
  ): Promise<void> {
    const board = await this.boardRepository.findOne({
      where: { id: boardId },
    });
    if (!board) {
      throw new NotFoundException('해당 게시글은 존재하지 않습니다');
    }
    await this.commentRepository.save(
      CommentRequestDto.toEntity(commentDto, board),
    );
  }

  async updateComment(
    boardId: number,
    commentId: number,
    commentDto: CommentRequestDto,
  ): Promise<void> {
    const board = await this.boardRepository.findOne({
      where: { id: boardId },
    });
    if (!board) {
      throw new Error('Board not found');
    }
    const comment = await this.commentRepository.findOne({
      where: { id: commentId },
    });
    if (!comment) {
      throw new Error('Comment not found');
    }

    comment.content = commentDto.comment_content;
    comment.author = commentDto.comment_author;

    await this.commentRepository.save(comment);
  }

  async deleteComment(boardId: number, commentId: number): Promise<void> {
    const board = await this.boardRepository.findOne({
      where: { id: boardId },
    });
    if (!board) {
      throw new Error('Board not found');
    }

    await this.commentRepository.delete(commentId);
  }

  async getAllComments(boardId: number): Promise<Comment[]> {
    const comments = await this.commentRepository.find({
      where: { board: { id: boardId } },
    });

    if (comments.length === 0) {
      const boardExists = await this.boardRepository.findOne({
        where: { id: boardId },
      });
      if (!boardExists) {
        throw new Error('Board not found');
      }
    }

    return comments;
  }
}
