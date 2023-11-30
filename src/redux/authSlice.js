import { createSlice } from '@reduxjs/toolkit';
import { login, register, logout } from './actions';
import PropTypes from 'prop-types';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
      password: '',
    },
    token: null,
    isLoggedIn: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});
export const authReducer = authSlice.reducer;

authSlice.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }),

  token: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};
