import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    theme: 'system'
}

export const theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        currentTheme: (state, action) => {
            localStorage.setItem('theme', action.payload)
            state.theme = action.payload
        },
    }
})

export const { currentTheme } = theme.actions
export default theme.reducer