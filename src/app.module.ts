import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ArticleController } from './article/article.controller';

@Module({
  imports: [ConfigModule.forRoot(), UserModule],
  controllers: [AppController, UserController, ArticleController],
  providers: [AppService],
})
export class AppModule {}
