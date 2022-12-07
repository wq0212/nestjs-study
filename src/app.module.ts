import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [MoviesModule, BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
