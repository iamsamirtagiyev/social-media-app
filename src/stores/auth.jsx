import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: false
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { createUser } = auth.actions
export default auth.reducer