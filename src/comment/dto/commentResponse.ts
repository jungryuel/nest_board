import { Comment } from '../comment.entity';

export class CommentResponseDto {
  content: string;
  createdAt: Date;

  static fromEntity(comment: Comment) {
    const boardDto = new CommentResponseDto();
    boardDto.content = comment.content;
    boardDto.createdAt = comment.created_at;
    return boardDto;
  }
}
