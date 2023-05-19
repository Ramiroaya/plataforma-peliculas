import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from "uuid";
import * as fs from "fs";
import { Film } from 'src/class/film';
import { CreateFilmDto } from 'src/dto/create-film.dto';

@Injectable()
export class FilmService {

    private Films: Film[] = [];
    private url: string = "./src/film/film.txt";

    constructor() {
        const datos = fs.readFileSync(this.url, "utf-8");
       if(datos.length) {
        const renglon = datos.split(";");
        for(let linea of renglon) {
            let partes = linea.split(",");
            let film = new Film(
                parseInt(partes[0]),
                partes[1],
                partes[2],
                partes[3],
                partes[4],
                parseInt(partes[5]),
                parseInt(partes[6]),
                partes[7],
            );
            this.Films.push(film);
        }
       } 
    }

    getFilms(): Film[] {
        return this.Films;
    }

    getFilmById(id: number): Film {
        const film = this.Films.find((film) => film.id===id);
        if(!film) {
            throw new NotFoundException(`No existe el film con id: ${id}`);
        }
        return film;
    }
    
    createFilm(CreateFilmDto: CreateFilmDto): Film {
        const newFilm: Film = new Film(
            CreateFilmDto.id,
            CreateFilmDto.titulo,
            CreateFilmDto.actores,
            CreateFilmDto.generos,
            CreateFilmDto.sinopsis,
            CreateFilmDto.duracion,
            CreateFilmDto.lanzamiento,
            CreateFilmDto.imagen
        );
        const dataAppend = this.Films.length
        ? "\n" + newFilm.toString(): newFilm.toString();

        this.Films.push(newFilm);
        fs.appendFileSync(this.url, dataAppend);
        return newFilm;

    }
    

    deleteFilm(id: number): boolean {
        const index = this.Films.findIndex((film) => film.id === id);
        if (index !== -1) {
          this.Films.splice(index, 1);
          console.log(`La película con ID: ${id} ha sido borrada`);
          return true;
        }
        return false;
      }


    updateFilm(nuevoFilm: any, id: number): string {
        const index = this.Films.findIndex(film => film.id == id);
        if (index != -1) {
            const filmExistente = this.Films[index];
            filmExistente.setTitulo(nuevoFilm.titulo);
            filmExistente.setActores(nuevoFilm.actores);
            filmExistente.setGeneros(nuevoFilm.generos);
            filmExistente.setSinopsis(nuevoFilm.sinopsis);
            filmExistente.setDuracion(nuevoFilm.duracion);
            filmExistente.setLanzamiento(nuevoFilm.lanzamiento);
            filmExistente.setImagen(nuevoFilm.imagen);

            return "Ok";
        } return "404";

    }
   
}


