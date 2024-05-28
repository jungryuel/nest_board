import { Comment } from '../comment.entity';

export class CommentResponseDto {
  comment_id: number;
  content: string;
  author: string;
  created_at: Date;

  static fromEntity(comment: Comment) {
    const boardDto = new CommentResponseDto();
    boardDto.comment_id = comment.comment_id;
    boardDto.content = comment.comment_content;
    boardDto.created_at = comment.comment_created_at;
    return boardDto;
  }
}
