import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Board } from './board.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRequestDto } from './dto/boardRequestDto';
import { BoardResponseDto } from './dto/boardResponseDto';
import { BoardListDto } from './dto/boardListResponse';
import { BoardUpdateRequestDto } from './dto/boardUpdateRequest';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async writeBoard(boardDto: BoardRequestDto): Promise<void> {
    const board = new BoardRequestDto().toEntity(boardDto);
    await this.boardRepository.save(board);
  }

  //게시글 단일 조회 모든 데이터를 던져줄거임
  async getBoard(id: number): Promise<BoardResponseDto> {
    const board = await this.boardRepository.findOne({
      where: { id },
    });
    if (!board) {
      throw new HttpException('Board not found', HttpStatus.NOT_FOUND);
    }

    return BoardResponseDto.fromEntity(board);
  }

  async updateBoard(
    id: number,
    boardDto: BoardUpdateRequestDto,
  ): Promise<void> {
    const board = await this.boardRepository.findOne({
      where: { id },
    });
    if (!board) {
      throw new HttpException('Board not found', HttpStatus.NOT_FOUND);
    }
    board.content = boardDto.board_content;
    board.title = boardDto.board_title;

    await this.boardRepository.save(board);
  }

  async deleteBoard(id: number): Promise<void> {
    const board = await this.boardRepository.findOne({
      where: { id },
    });
    if (!board) {
      throw new HttpException('Board not found', HttpStatus.NOT_FOUND);
    }

    await this.boardRepository.delete(id);
  }

  //게시글 목록 조회는 작성자 ,수정일,생성일, 제목까지만
  async getAllBoards(): Promise<BoardListDto[]> {
    const boards = await this.boardRepository.find();

    return boards.map((board) => BoardListDto.fromEntity(board));
  }
}
