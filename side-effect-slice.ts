import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { add, subtract } from './counter-slice';

interface SideEffectState {
  derivedValue: number;
}

const initialState: SideEffectState = {
  derivedValue: 0,
};

export const sideEffectSlice = createSlice({
  name: 'sideEffect',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(add, (state, action: PayloadAction<number>) => {
        state.derivedValue = action.payload ** 2;
      })
      .addCase(subtract, (state, action: PayloadAction<number>) => {
        state.derivedValue = Math.sqrt(action.payload);
      });
  },
});

export default sideEffectSlice.reducer;
