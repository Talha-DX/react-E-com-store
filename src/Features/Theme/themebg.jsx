import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    color: 'white'
}

const ThemeSlice = createSlice({
    name: 'Theme',
    initialState,
    reducers: {
        changeColor(state, action) {
            state.color === 'white' ? 
            state.color = 'black' : 
            state.color = 'white'
        }
    }
})

export const { changeColor } = ThemeSlice.actions

export default ThemeSlice.reducer


