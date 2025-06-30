import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const HomeScreen = () => {

    const safeArea = useSafeAreaInsets();

    const { nowPlayingQuery, popularQuery } = useMovies();

    if (nowPlayingQuery.isLoading || popularQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1 bg-black'>
                <ActivityIndicator size="large" color="purple" />
            </View>
        )
    }

    return (
        <View  style={{ paddingTop: safeArea.top }}>
            <Text className='text-3xl font-bold px-4 my-2'>MoviesApp</Text>

            {/* carousel de imagenes */}

            <MainSlideShow 
               movies={nowPlayingQuery.data ?? []}
            />

            {/* lista horizontal de peliculas populares */}
            <MovieHorizontalList movies={popularQuery.data ?? []} title='Populares' />

        </View>
    )
}

export default HomeScreen