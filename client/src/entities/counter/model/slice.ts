import { type PayloadAction, createSlice } from '@reduxjs/toolkit'


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
    },
    addBonus: (state, action: PayloadAction<number>) => {
      state.apples - action.payload
      
    }
  },
})



export const { addApplesOnClick, addBonus } = counterSlice.actions

export default counterSlice.reducer;