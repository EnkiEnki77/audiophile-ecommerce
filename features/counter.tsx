import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../pages/_app'

interface CounterState {
    value: number
}

const initialState = {
    value: 1
} as CounterState


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            if(state.value === 1){
                return
            }
            state.value -= 1
        },
    }
})

export const { increment, decrement} = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer