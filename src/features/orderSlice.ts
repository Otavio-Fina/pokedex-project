import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


export interface orderState {
    ordem: string,
    filtro: number
  }

const initialState: orderState = {
    ordem: 'crescente',
    filtro: 100     // 100 = tudo, porque 0 é para o tipo agua
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        ordem: (state, action: PayloadAction<any>) => {state.ordem = action.payload},

        filtro: (state, action: PayloadAction<any>) => {state.filtro = action.payload}
    }
})

export const { ordem, filtro } = orderSlice.actions

export default orderSlice.reducer