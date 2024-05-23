import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './board/board.module';
import { CommentModule } from './comment/comment.module';
import { Comment } from './comment/comment.entity';
import { Board } from './board/board.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'nest',
      entities: [Comment, Board],
      synchronize: false,
    }),
    BoardModule,
    CommentModule,
  ],
})
export class AppModule {}
