import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/movie-db-responses";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";


export const nowPlayingAction = async () => {

    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');
        
        const movies = data.results.map( (movie) => MovieMapper.fromTheMovieDBToMovie(movie) );
        
        return movies;


    } catch (error) {
        console.error(error);
    }

}