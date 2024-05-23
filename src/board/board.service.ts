import { Injectable } from '@nestjs/common';
import { Board } from './board.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRequestDto } from './dto/boardRequestDto';
import { BoardResponseDto } from './dto/boardResponseDto';
import { Transactional } from 'typeorm-transactional-cls-hooked';

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

  async getBoard(id: number): Promise<BoardResponseDto> {
    const board = await this.boardRepository.findOne({
      where: { id },
    });

    return BoardResponseDto.fromEntity(board);
  }

  @Transactional()
  async updateBoard(id: number, boardDto: BoardRequestDto): Promise<void> {
    const board = await this.boardRepository.findOne({
      where: { id },
    });
    if (!board) {
      throw new Error('Board not found');
    }
    board.content = boardDto.content;
    board.title = boardDto.title;
    board.created_at = new Date();

    await this.boardRepository.save(board);
  }

  async deleteBoard(id: number): Promise<void> {
    await this.boardRepository.delete(id);
  }

  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
  }
}
