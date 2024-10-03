import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async createCommentForPost(postId: number, content: string) {
    const comment = this.commentRepository.create({
      content,
      resourceId: postId,
      resourceType: 'post',
    });
    return this.commentRepository.save(comment);
  }

  async createCommentForVideo(videoId: number, content: string) {
    const comment = this.commentRepository.create({
      content,
      resourceId: videoId,
      resourceType: 'video',
    });
    return this.commentRepository.save(comment);
  }
}
