import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/movie-db-responses";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";


export const popularMoviesAction = async () => {

    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/popular');
        
        const movies = data.results.map( (movie) => MovieMapper.fromTheMovieDBToMovie(movie) );
        
        return movies;


    } catch (error) {
        console.error(error);
    }

}