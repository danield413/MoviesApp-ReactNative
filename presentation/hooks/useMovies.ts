import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action"
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"


export const useMovies = () => {

    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'now-playing'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24, // data is fresh for 1 day
    })
    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24, // data is fresh for 1 day
    })

    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'top-rated'],  
        queryFn: ({ pageParam }) => {
            return topRatedMoviesAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24, // data is fresh for 1 day
        getNextPageParam: (_, pages) => pages.length + 1, // Increment page number for next query
    })

    const upcomingQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: () => upcomingMoviesAction(), // Assuming you want to use the same action for upcoming movies
        staleTime: 1000 * 60 * 60 * 24, // data is fresh for 1 day
    })

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery
    }
}