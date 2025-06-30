import { movieApi } from "@/core/api/movie-api";
import { MovieResponse } from "@/infrastructure/interfaces/movie-db-response";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieByIdAction = async (id: number): Promise<CompleteMovie> => {

    try {
        const { data } = await movieApi.get<MovieResponse>(`/${id}`);

        console.log('Pelicula http cargada')
        
        return MovieMapper.fromTheMovieDBToCompleteMovie(data);


    } catch (error) {
        console.error(error);
        throw 'Cannot get movie by id'; 
    }

}