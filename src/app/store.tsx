import { configureStore } from "@reduxjs/toolkit";

import usersReducers from "../features/usersSlice"



export const store = configureStore({
    reducer: {
        users: usersReducers,
    },
});


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>