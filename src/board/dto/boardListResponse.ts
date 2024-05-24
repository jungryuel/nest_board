import { Board } from '../board.entity';

export class BoardListDto {
  board_title: string;
  board_createdAt: Date;
  board_updatedAt: Date;
  board_author: string;

  static fromEntity(board: Board): BoardListDto {
    const dto = new BoardListDto();
    dto.board_author = board.author;
    dto.board_createdAt = board.created_at;
    dto.board_updatedAt = board.updated_at;
    dto.board_title = board.title;
    return dto;
  }
}
