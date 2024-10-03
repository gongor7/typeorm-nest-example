import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { SocialModule } from './social/social.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '',
      password: '',
      database: '',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([User]),
    SocialModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
