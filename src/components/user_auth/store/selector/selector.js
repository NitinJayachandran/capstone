import { createSelector } from 'reselect';

// Select the user slice from the state
const selectUserSlice = (state) => state.user;

// Create a selector to get the registered user data
export const selectRegisteredUser = createSelector(
  [selectUserSlice],
  (user) => user.user
  //(user) => user
);
