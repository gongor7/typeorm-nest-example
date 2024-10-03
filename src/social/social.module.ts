import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Post } from './entities/post.entity';
import { Video } from './entities/video.entity';
import { CommentController } from './social.controller';
import { CommentService } from './social.service';

@Module({
  controllers: [CommentController],
  providers: [CommentService],
  imports: [TypeOrmModule.forFeature([Comment, Post, Video])],
})
export class SocialModule {}
