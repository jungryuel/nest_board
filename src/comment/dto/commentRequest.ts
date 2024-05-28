import { Board } from 'src/board/board.entity';
import { Comment } from '../comment.entity';

export class CommentRequestDto {
  comment_content: string;
  comment_author: string;

  static toEntity(dto: CommentRequestDto, board: Board) {
    const comment = new Comment();
    comment.comment_content = dto.comment_content;
    comment.comment_author = dto.comment_author;
    comment.board = board;
    return comment;
  }
}
