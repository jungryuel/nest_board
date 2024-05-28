import { Board } from 'src/board/board.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'COMMENT' })
export class Comment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'comment_id' })
  comment_id: number;

  @Column({ type: 'varchar', name: 'content', length: 2000 })
  comment_content: string;

  @Column({ type: 'varchar', name: 'author', length: 2000 })
  comment_author: string;

  @CreateDateColumn({
    type: 'timestamp',
    precision: 6,
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  comment_created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 6, name: 'updated_at' })
  comment_updated_at: Date;

  @ManyToOne(() => Board, (board) => board.comments)
  board: Board;
}
