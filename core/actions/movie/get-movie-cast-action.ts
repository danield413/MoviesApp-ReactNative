import { movieApi } from "@/core/api/movie-api";
import { CreditsResponse } from "@/infrastructure/interfaces/movie-credits-response.interface";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";



export const getMovieCastAction = async (movieId: number) => {

   
       try {
           const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);
           return data.cast.map(CastMapper.fromMovieDBCastToEntity);
       } catch (error) {
           console.error(error);
           throw 'Cannot get movie by id'; 
       }
   
}