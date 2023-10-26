import { type PayloadAction, createSlice } from '@reduxjs/toolkit'


type StoreSliceState = {
	id: number;
	title: string;
	cost: number;
	type: "PER_SECOND" | "PER_CLICK";
	bonusCount: number;	
	quantity: number;
  image: any;
}

type CounterSliceState = {

  counter: {
    perClick: number;
    perSecond: number;
    apples: number;
  },
  storeItems: StoreSliceState[]
}


type PayloadActionBuy = {
	id: number;
	price: number;
  type: "PER_SECOND" | "PER_CLICK";
  count: number
}
const initialState: CounterSliceState = {

  counter: {
    perClick: 1,
    perSecond: 0,
    apples: 0
  },
  storeItems: []
}



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addApplesOnClick: (state) => {
      state.counter.apples += state.counter.perClick;
    },
    addApplesEverySecond: (state) => {
      state.counter.apples += state.counter.perSecond;
    },
    initialStore: (state, action: PayloadAction<StoreSliceState>) => {
			state.storeItems = state.storeItems.concat(action.payload)
    },
    buyBonus: (state, action: PayloadAction<PayloadActionBuy>) => {
      state.storeItems.forEach((item) => {
				if(item.id === action.payload.id) {
          if(action.payload.price > state.counter.apples) return alert("нет бабла") 
          state.counter.apples -= action.payload.price;
          if(action.payload.type === "PER_SECOND") {
            state.counter.perSecond += action.payload.count
          } else {
            state.counter.perClick += action.payload.count
          }
					item.cost *= 2;
					item.quantity += 1;
				} 
			})
    }
  },
})



export const { addApplesOnClick, initialStore, addApplesEverySecond, buyBonus } = counterSlice.actions

export default counterSlice.reducer;