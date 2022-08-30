import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import cartReducer from '../features/cart'
import counterReducer from '../features/counter'

const store = configureStore(
  {reducer: {
    cart: cartReducer,
    counter: counterReducer
  }}
)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
