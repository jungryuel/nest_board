import { Board } from '../board.entity';

export class BoardResponseDto {
  board_title: string;
  board_content: string;
  board_author: string;
  board_created_at: Date;
  board_updated_at: Date;

  static fromEntity(board: Board) {
    const boardDto = new BoardResponseDto();
    boardDto.board_title = board.title;
    boardDto.board_author = board.author;
    boardDto.board_created_at = board.created_at;
    boardDto.board_content = board.content;
    boardDto.board_updated_at = board.updated_at;
    return boardDto;
  }
}
