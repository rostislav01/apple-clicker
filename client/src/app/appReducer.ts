import { counterSlice } from "../entities/counter/model/slice";
import { themeSlice } from "../entities/theme/model/slice";
import { baseApi } from "../shared/api";
import { combineReducers } from '@reduxjs/toolkit'


export const rootReducer = combineReducers({
  [themeSlice.name]: themeSlice.reducer,
  [counterSlice.name]: counterSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})