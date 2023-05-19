import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    ParseUUIDPipe,
    Post,
    Put,
  } from "@nestjs/common";
  import { FilmService } from "./film.service";
  import { Film } from "src/class/film";
import { CreateFilmDto } from "src/dto/create-film.dto";

@Controller('films')
export class FilmController {
    constructor(private readonly filmService:FilmService) {}

    @Get()
    getFilms(): Film[]{
        return this.filmService.getFilms();
        }

    @Get(":id")
    getPistaById(@Param("id", ParseUUIDPipe) id: number): Film {
    return this.filmService.getFilmById(id);
    }

    @Post()
    postFilm(@Body() createFilmDto: CreateFilmDto) {
        return this.filmService.createFilm(createFilmDto);
    }

    @Put(":id")
    putFilm(@Body()film: CreateFilmDto, @Param('id') id: number): string {
        return this.filmService.updateFilm(film, id);
    }

    @Delete(":id")
    deleteFilm(@Param('id', ParseIntPipe) id: number): boolean {
        return this.filmService.deleteFilm(id);
    }
}
