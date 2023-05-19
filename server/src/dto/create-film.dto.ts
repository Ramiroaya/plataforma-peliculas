import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";



export class CreateFilmDto {
    @IsNumber()
    readonly id: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    readonly titulo: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    readonly actores: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    readonly generos: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    readonly sinopsis: string;

    @IsNumber()
    @IsNotEmpty()
    readonly duracion: number;

    @IsNumber()
    @IsNotEmpty()
    readonly lanzamiento: number;

    @IsString()
    @IsNotEmpty()
    readonly imagen: string;

}