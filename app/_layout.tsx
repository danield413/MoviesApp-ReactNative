import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import "../global.css"

const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,

          }}
        />
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

export default RootLayout