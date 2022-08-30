import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../pages/_app'

interface cartItem{
    
    price: number,
    name: string,
    image: {mobile:string, desktop: string, tablet: string},
    defaultCounter: number
}

interface CartState {
    cartItem: cartItem[]
}

const initialState:CartState = {
    cartItem: [{name:'', price: 0, image: {mobile: '', tablet: '', desktop: ''}, defaultCounter: 0 }]
} 


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action) => {
            if(state.cartItem[0].name === ''){
                state.cartItem[0] = action.payload
            }
            else{
                state.cartItem.push(action.payload)
            }
        },

        remove: (state) => {
            state.cartItem = initialState.cartItem
        }

        
    }
})

export const {addToCart, remove} = cartSlice.actions

export const selectCart = (state: RootState) => state.cart.cartItem

export default cartSlice.reducer