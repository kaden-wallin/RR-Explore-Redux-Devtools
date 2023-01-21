import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/counterSlice'
import todoReducer from './components/todoSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer
    }
})