import { Board } from 'src/board/board.entity';
import { Comment } from '../comment.entity';

export class CommentRequestDto {
  content: string;

  static toEntity(dto: CommentRequestDto, board: Board) {
    const comment = new Comment();
    comment.content = dto.content;
    comment.board = board;
    return comment;
  }
}
