import MovieCast from '@/presentation/components/movie/MovieCast';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const MovieScreen = () => {

    const { id } = useLocalSearchParams();

    const { movieQuery, movieCastQuery } = useMovie(+id);

    if (movieQuery.isLoading || !movieQuery.data) {
        return (
            <View className='flex flex-1 items-center justify-center'>
                <Text
                    className='mb-4 text-lg font-semibold text-purple-600'
                >Loading movie...</Text>
                <ActivityIndicator size="large" color="purple" />
            </View>
        );
    }


    return (
        <ScrollView className='flex-1'>
            <MovieHeader 
                poster={movieQuery.data.poster}
                originalTitle={movieQuery.data.originalTitle}
                title={movieQuery.data.title}
            />

            <MovieDescription 
                movie={movieQuery.data}
            />

            <MovieCast 
                cast={movieCastQuery.data!}
            />
        </ScrollView>
    )
}

export default MovieScreen