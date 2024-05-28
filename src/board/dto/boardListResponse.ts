import { Board } from '../board.entity';

export class BoardListDto {
  board_id: number;
  board_title: string;
  board_created_at: Date;
  board_updated_at: Date;
  board_author: string;

  static fromEntity(board: Board): BoardListDto {
    const dto = new BoardListDto();
    dto.board_id = board.id;
    dto.board_author = board.author;
    dto.board_created_at = board.created_at;
    dto.board_updated_at = board.updated_at;
    dto.board_title = board.title;
    return dto;
  }
}
