import { Formatter } from '@/config/helpers/formatter';
import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface';
import { Text, View } from 'react-native';

interface Props {
    movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className='mx-5'>
        <View className='flex flex-row'>
            <Text>{movie.rating}</Text>
            <Text> - {movie.genres.join(", ")}</Text>
        </View>

        <Text className='font-black mt-5'>Sinopsis</Text>
        <Text className='text-gray-500 mt-2'>{movie.description}</Text>

        <Text className='font-bold mt-4 text-md bg-gray-200 text-center p-2 rounded-md w-[140px]'>{Formatter.currency(movie.budget)}</Text>

    </View>
  )
}

export default MovieDescription