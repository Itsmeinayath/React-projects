// The notes for the store.js file are in the store.js file itself.
// the store.js file is the main file for the redux store and it is the file that will be used to create the store and export it to the index.js file.
// Configurestore means that we are going to use the redux toolkit to create the store.
// what is store? store is the place where the state of the application is stored.
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})