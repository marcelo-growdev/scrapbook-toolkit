import { combineReducers } from '@reduxjs/toolkit';

import cardsReducer from './cardsSlice';

const reducer = combineReducers({
  cards: cardsReducer,
});
export default reducer;
