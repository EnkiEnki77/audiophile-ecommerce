import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './pages/_app'
import cookie from 'cookie'
import http from "http"

http.IncomingMessage

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const parseCookies = (req:http.IncomingMessage) => cookie.parse(req ? req.headers.cookie || '' : document.cookie)