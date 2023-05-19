import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmController } from './film/film.controller';
import { FilmService } from './film/film.service';

@Module({
  imports: [],
  controllers: [AppController, FilmController],
  providers: [AppService, FilmService],
})
export class AppModule {}
