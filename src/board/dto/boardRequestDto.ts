import { Board } from '../board.entity';

export class BoardRequestDto {
  board_title: string;
  board_content: string;
  board_author: string;

  toEntity(dto: BoardRequestDto) {
    const board = new Board();
    board.content = dto.board_content;
    board.title = dto.board_title;
    board.author = dto.board_author;
    return board;
  }
}
