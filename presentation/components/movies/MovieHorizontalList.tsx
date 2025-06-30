import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { FlatList, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[];
    title: string;
}

const MovieHorizontalList = ({ movies, title }: Props) => {
  return (
    <View>
      <Text
        className='text-2xl font-bold px-4 mb-3'
      >{title}</Text>

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster  />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default MovieHorizontalList