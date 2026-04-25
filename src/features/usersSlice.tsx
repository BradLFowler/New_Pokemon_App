import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UsersInfo {
    id: number,
    date: string,
    name: string,
    email: string,
    password: string,
    hasAccount: boolean;
}

interface UserState {
    usersInfo: UsersInfo[];
}

const initialState: UserState = {
    usersInfo: []
}


export const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<UsersInfo[]>) => {
            state.usersInfo.push(...action.payload)
            return console.log(state.usersInfo)
        },
        deleteUser: (state, action) => {
            state.usersInfo.filter(users => users.email == action.payload.email)
            return alert("User Deleted")
        },
    }

});

export const { addUser, deleteUser} = usersSlice.actions;
export default usersSlice.reducer;