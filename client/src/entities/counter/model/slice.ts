import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/appStore'


type CounterSliceState = {
  perClick: number;
  perSecond: number;
  apples: number;
  
}

const initialState: CounterSliceState = {
  perClick: 1,
  perSecond: 0,
  apples: 0
}



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // changeTheme: (state, action: PayloadAction<Theme>) => {
    //   state.currentTheme = action.payload
    // },
    addApplesOnClick: (state) => {
      state.apples += state.perClick;
      console.log('dsds')
    }
  },
})



export const { addApplesOnClick } = counterSlice.actions

export default counterSlice.reducer;