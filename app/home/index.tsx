import { Movie } from '@/infrastructure/interfaces/movie.interface';
import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const HomeScreen = () => {

    const safeArea = useSafeAreaInsets();

    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

    if (nowPlayingQuery.isLoading || popularQuery.isLoading || topRatedQuery.isLoading || upcomingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1 bg-black'>
                <ActivityIndicator size="large" color="purple" />
            </View>
        )
    }

    return (
        <View>
            <View
                className='bg-indigo-600 flex-row items-center justify-center'
                style={{ paddingTop: safeArea.top, paddingBottom: 10, paddingHorizontal: 10 }}
            >
                <Text className='text-3xl text-white font-bold px-4 my-2'>MoviesApp</Text>
            </View>
            {/* <Text className='text-3xl font-bold px-4 my-2'>MoviesApp</Text> */}

            {/* carousel de imagenes */}

            <MainSlideShow
                movies={nowPlayingQuery.data ?? []}
            />

            {/* lista horizontal de peliculas populares */}
            <MovieHorizontalList className='mb-5' movies={popularQuery.data ?? []} title='Populares' />

            {/* lista horizontal de peliculas mas vistas */}
            <MovieHorizontalList
                className='mb-5'
                movies={(topRatedQuery.data?.pages.flat() as Movie[]) ?? []}
                title='Mejor Valoradas'
                loadNextPage={topRatedQuery.fetchNextPage}
            />


            {/* lista horizontal de peliculas proximas */}
            <MovieHorizontalList className='mb-5' movies={upcomingQuery.data ?? []} title='Próximamente' />

        </View>
    )
}

export default HomeScreen