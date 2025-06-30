import { Cast } from '@/infrastructure/interfaces/movie.interface'
import React from 'react'
import { Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { ActorCard } from './ActorCard'

interface Props {
    cast: Cast[]
}

const MovieCast = ({ cast }: Props) => {
  return (
   <>
    <Text className='text-lg font-bold mx-5 my-4'>
      Actores
    </Text>
     <FlatList
        horizontal
      showsHorizontalScrollIndicator={false}
      data={cast}
      renderItem={({ item }) => (
        <ActorCard actor={item} />
      )}
      keyExtractor={(item) => item.id.toString()}
      className='mt-4'
    />
   </>
  )
}

export default MovieCast