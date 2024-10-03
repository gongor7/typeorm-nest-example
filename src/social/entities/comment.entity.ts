import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { Post } from './post.entity';
// import { Video } from './video.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  resourceId: number;

  @Column()
  resourceType: 'post' | 'video';

//   @ManyToOne(() => Post, (post) => post.comments, { nullable: true })
//   resourcePost: Post;

//   @ManyToOne(() => Video, (video) => video.comments, { nullable: true })
//   resourceVideo: Video;

//   get resource() {
//     return this.resourceType === 'post'
//       ? this.resourcePost
//       : this.resourceVideo;
//   }
}
