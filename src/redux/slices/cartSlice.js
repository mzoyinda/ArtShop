import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = Cookies.get('cart')
  ? { ...JSON.parse(Cookies.get('cart')), loading: true }
  : {
      loading: true,
      cartItems: []
    }

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2) // 12.3456 to 12.35
}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
    state.loading = true
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.row_id === item.row_id)
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.row_id === existItem.row_id ? item : x
        )
      } else {
        state.cartItems = [...state.cartItems, item]
      }
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      )
      state.totalPrice = addDecimals(
        Number(state.itemsPrice)
      )
      Cookies.set('cart', JSON.stringify(state))
      state.loading = false
    },
    removeFromCart: (state, action) => {
        state.loading = true
      state.cartItems = state.cartItems.filter((x) => x.row_id !== action.payload)
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      )
      state.totalPrice = addDecimals(
        Number(state.itemsPrice) 
      )
      Cookies.set('cart', JSON.stringify(state))
      state.loading = false
    }, 
  },
})
export const {
  addToCart,
  removeFromCart,
} = cartSlice.actions

export default cartSlice.reducer
