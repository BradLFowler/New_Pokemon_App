import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector, } from "react-redux";

import usersReducer from './features/slices/usersSlice'


export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});

export const useAppDispatch: () => typeof store.dispatch=useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;