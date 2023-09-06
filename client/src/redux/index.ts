import { configureStore } from '@reduxjs/toolkit'
import project from './project'

const store = configureStore({
    reducer: {
        project: project
    },
    devTools: true
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch