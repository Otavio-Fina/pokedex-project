import { configureStore } from "@reduxjs/toolkit";

import dataReducer from '../features/dataSlice'
import orderReducer from '../features/orderSlice'



export const store = configureStore({
    reducer: { data: dataReducer, order: orderReducer },
    
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch