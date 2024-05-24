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
  id: number;

  @Column({ type: 'varchar', name: 'content', length: 2000 })
  content: string;

  @Column({ type: 'varchar', name: 'author', length: 2000 })
  author: string;

  @CreateDateColumn({
    type: 'timestamp',
    precision: 6,
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 6, name: 'updated_at' })
  updated_at: Date;

  @ManyToOne(() => Board, (board) => board.comments)
  board: Board;
}
