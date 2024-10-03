import { Controller, Post, Body, Param } from '@nestjs/common';
import { CommentService } from './social.service';
// import { CommentService } from './social.service';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('post/:postId')
  createCommentForPost(
    @Param('postId') postId: number,
    @Body('content') content: string,
  ) {
    console.log('sjdahkajhd');
    return this.commentService.createCommentForPost(postId, content);
  }

  @Post('video/:videoId')
  createCommentForVideo(
    @Param('videoId') videoId: number,
    @Body('content') content: string,
  ) {
    console.log('hola');
    return this.commentService.createCommentForVideo(videoId, content);
  }
}
