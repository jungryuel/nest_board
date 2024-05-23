import { Board } from '../board.entity';

export class BoardRequestDto {
  title: string;
  content: string;

  toEntity(dto: BoardRequestDto) {
    const board = new Board();
    board.content = dto.content;
    board.title = dto.title;

    return board;
  }
}
