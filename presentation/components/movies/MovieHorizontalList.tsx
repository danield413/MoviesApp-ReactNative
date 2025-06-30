import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { useEffect, useRef } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[];
    title: string;
    className?: string;

    loadNextPage?: () => void;
}

const MovieHorizontalList = ({ movies, title, className, loadNextPage }: Props) => {

  const isLoading = useRef(false);
  
  useEffect(() => {
    
    setTimeout(() => {
      isLoading.current = false;
    }, 200);

  }, [movies])

  const onScroll  = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

    if( isLoading.current ) return;


    const { contentOffset, layoutMeasurement, contentSize } =  event.nativeEvent;

    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

    if( !isEndReached ) return;

    isLoading.current = true;

    console.log('Cargando más películas...');
    
    loadNextPage && loadNextPage();
    // la otra forma es hacer un await para cambiar el isLoading a false
  }

  return (
    <View className={className}>
      <Text
        className='text-2xl font-bold px-4 mb-3'
      >{title}</Text>

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster  />
        )}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={ onScroll}
      />
    </View>
  )
}

export default MovieHorizontalList