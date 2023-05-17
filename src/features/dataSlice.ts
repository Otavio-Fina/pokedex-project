import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


export interface dataState {
    pokedexAtual: any,
    regiao: number,
  }

const initialState: dataState = {
    pokedexAtual: "batata",
    regiao: 1,
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        getPokedexAtual: (state, action: PayloadAction<Object>) => {
            state.pokedexAtual = action.payload;
        },
        
        getRegiao: (state, action: PayloadAction<number>) => {
            state.regiao = action.payload
        }
    },
})

export const { getPokedexAtual, getRegiao } = dataSlice.actions

export default dataSlice.reducer