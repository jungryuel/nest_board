import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { BoardRequestDto } from './dto/boardRequestDto';
import { BoardService } from './board.service';
import { BoardResponseDto } from './dto/boardResponseDto';
import { Board } from './board.entity';
import { BoardListDto } from './dto/boardListResponse';

@Controller('/api/boards')
export class BoardController {
  //의존성 주입
  constructor(private readonly boardService: BoardService) {}

  @Post()
  async writeBoard(@Body() boardDto: BoardRequestDto): Promise<void> {
    await this.boardService.writeBoard(boardDto);
  }

  @Get('/:id')
  async getBoard(@Param('id') id: number): Promise<BoardResponseDto> {
    return await this.boardService.getBoard(id);
  }

  @Put('/:id')
  async updateBoard(
    @Param('id') id: number,
    @Body() boardDto: BoardRequestDto,
  ): Promise<void> {
    await this.boardService.updateBoard(id, boardDto);
  }

  @Delete('/:id')
  async deleteBoard(@Param('id') id: number): Promise<void> {
    await this.boardService.deleteBoard(id);
  }

  @Get()
  async getAllBoard(): Promise<BoardListDto[]> {
    return await this.boardService.getAllBoards();
  }
}
