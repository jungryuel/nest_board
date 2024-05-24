import { Board } from 'src/board/board.entity';
import { Comment } from '../comment.entity';

export class CommentRequestDto {
  comment_content: string;
  comment_author: string;

  static toEntity(dto: CommentRequestDto, board: Board) {
    const comment = new Comment();
    comment.content = dto.comment_content;
    comment.author = dto.comment_author;
    comment.board = board;
    return comment;
  }
}
