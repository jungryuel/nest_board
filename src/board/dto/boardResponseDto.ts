import { Board } from '../board.entity';

export class BoardResponseDto {
  title: string;
  content: string;
  createdAt: Date;

  static fromEntity(board: Board) {
    const boardDto = new BoardResponseDto();
    boardDto.content = board.content;
    boardDto.title = board.title;
    boardDto.createdAt = board.created_at;
    return boardDto;
  }
}
