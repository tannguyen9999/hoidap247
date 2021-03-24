import { createSlice } from '@reduxjs/toolkit';

const initialLoading = {
  listWithdrawal: [null],
  status: null,
  total: 1,
  offset: 0,
  limit: 10
};

const getListWithDrawal = createSlice({
  name: 'listWithDrawal',
  initialState: initialLoading,
  reducers: {
    changelistWithdrawal: (state, action) => {
      // const newPhoto = action.payload;
      return (state = action.payload);
    }
  }
});

const { reducer, actions } = getListWithDrawal;
export const { changelistWithdrawal } = actions;
export default reducer;
