import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: number,
    time: number,
    username: string,
    password: string,
    isSignedIn: boolean;
}

interface UsersState {
    users: User[];
}

const initialState: UsersState = {
    users: [],
}

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<{username: string, password: string}>) => {
            state.users.push({
                id: state.users.length,
                time: Date.now(), 
                username: action.payload.username, 
                password: action.payload.password,
                isSignedIn: false
            })
        },
        deleteUser: (state, action) => {
            state.users.filter(users => users.id !== action.payload)
            return alert("User Deleted")
        },
    }

});

export const { addUser, deleteUser} = usersSlice.actions;
export default usersSlice.reducer;