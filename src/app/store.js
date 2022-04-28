import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../cvSlice/cvSlice'

export default configureStore({
  reducer: {
    counter: counterSlice
  }
})