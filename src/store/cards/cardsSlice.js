import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cardAdapter = createEntityAdapter({
  selectId: (card) => card.id,
});

export const { selectAll: selectCards, selectIds } = cardAdapter.getSelectors(
  (state) => state.cardsReducer.cards,
);

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: cardAdapter.getInitialState({}),
  reducers: {
    addCard: cardAdapter.addOne,
    removeCard: cardAdapter.removeOne,
  },
});

export const { addCard, removeCard } = cardsSlice.actions;

export default cardsSlice.reducer;
