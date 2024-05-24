import { Comment } from 'src/comment/comment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'BOARD' })
export class Board {
  @PrimaryGeneratedColumn({ type: 'int', name: 'board_id' })
  id: number;

  @Column({ type: 'varchar', name: 'title' })
  title: string;

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

  @OneToMany(() => Comment, (comment) => comment.board)
  comments: Comment[];
}
