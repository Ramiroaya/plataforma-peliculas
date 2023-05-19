
export  class Film {
    id: number;
    titulo: string;
    actores: string;
    generos: string;
    sinopsis: string;
    duracion: number;
    lanzamiento: number;
    imagen: string;
    constructor(
        id: number,
        titulo: string,
        actores: string,
        generos: string,
        sinopsis: string,
        duracion: number,
        lanzamiento: number,
        imagen: string
    ){
        this.id = id;
        this.titulo = titulo;
        this.actores = actores;
        this.generos = generos;
        this.sinopsis = sinopsis;
        this.duracion = duracion;
        this.lanzamiento = lanzamiento;
        this.imagen = imagen;
    }

       
    toString(): string {
        return JSON.stringify({
          id: this.id,
          titulo: this.titulo,
          actores: this.actores,
          generos: this.generos,
          sinopsis: this.sinopsis,
          duracion: this.duracion,
          lanzamiento: this.lanzamiento,
          imagen: this.imagen,
        });
      }
         
    setId(nuevoId:number):void{
        this.id = nuevoId;
    }
    setTitulo(nuevoTitulo:string):void{
        this.titulo = nuevoTitulo;
    }
    setActores(nuevoActores:string):void{
        this.actores = nuevoActores;
    }
    setGeneros(nuevoGeneros:string):void{
        this.generos = nuevoGeneros;
    }
    setSinopsis(nuevoSinopsis:string):void{
        this.sinopsis = nuevoSinopsis;
    }
    setDuracion(nuevoDuracion:number):void{
        this.duracion = nuevoDuracion;
    }
    setLanzamiento(nuevoLanzamiento:number):void{
        this.lanzamiento = nuevoLanzamiento;
    }
    setImagen(nuevoImagen:string):void{
        this.imagen = nuevoImagen;
    }
    
}