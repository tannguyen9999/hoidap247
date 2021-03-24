import { createSlice } from '@reduxjs/toolkit';

const initialLoading = {
  listPayments: [null],
  status: null,
  total: 1,
  offset: 0,
  limit: 10
};

const getListPayments = createSlice({
  name: 'listPayments',
  initialState: initialLoading,
  reducers: {
    changeListPayments: (state, action) => {
      // const newPhoto = action.payload;
      return (state = action.payload);
    },
    changeListPaymentsOffset: (state, action) => {
      // const newPhoto = action.payload;
      return { ...state, offset: action.payload.offset };
    }
  }
});

const { reducer, actions } = getListPayments;
export const { changeListPayments, changeListPaymentsOffset } = actions;
export default reducer;
