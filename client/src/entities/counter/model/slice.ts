import { type PayloadAction, createSlice } from '@reduxjs/toolkit'


type CounterSliceState = {
  perClick: number;
  perSecond: number;
  apples: number;

}

type PayloadActionProps = {
  type: string;
  price: number
  count: number
}
const initialState: CounterSliceState = {
  perClick: 1,
  perSecond: 1,
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
    addApplesEverySecond: (state) => {
      state.apples += state.perSecond;
    },
    addBonus: (state, action: PayloadAction<PayloadActionProps>) => {
      const { price, type, count } = action.payload;
      if (state.apples >= price) {
        state.apples -= price;
        type === "PER_SECOND" ? (state.perSecond += count) : (state.perClick += count);
      } else {
        alert("Error");
      }
    
      
    }
  },
})



export const { addApplesOnClick, addBonus, addApplesEverySecond } = counterSlice.actions

export default counterSlice.reducer;