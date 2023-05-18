import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


export interface orderState {
    ordem: string,
    filtro: number,
    abrirSelecao: boolean,
    nomeOrdemSelecao: string,
    nomeTipoSelecao: string,
    buscaNome: string,
  }

const initialState: orderState = {
    ordem: 'crescente',
    filtro: 100,    // 100 = tudo, porque 0 é para o tipo agua
    abrirSelecao: false, // diz se é pra abrir ou fechar
    nomeOrdemSelecao: "Menor Número",
    nomeTipoSelecao: "Todos os Tipos",
    buscaNome: "",

}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        ordem: (state, action: PayloadAction<any>) => {state.ordem = action.payload},

        filtro: (state, action: PayloadAction<any>) => {state.filtro = action.payload},

        abrirSelecao: (state, action: PayloadAction<any>) => {state.abrirSelecao = action.payload},

        nomeOrdemSelecao: (state, action: PayloadAction<any>) => {state.nomeOrdemSelecao = action.payload},

        nomeTipoSelecao: (state, action: PayloadAction<any>) => {state.nomeTipoSelecao = action.payload},

        buscaNome: (state, action: PayloadAction<any>) => {state.buscaNome = action.payload;},
    }
})

export const { ordem , filtro , abrirSelecao , nomeOrdemSelecao , nomeTipoSelecao , buscaNome } = orderSlice.actions

export default orderSlice.reducer