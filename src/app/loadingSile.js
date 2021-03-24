import { createSlice } from '@reduxjs/toolkit';

const initialLoading = {
    isLoading: false,
};


const loading = createSlice({
    name: 'loading',
    initialState: initialLoading,
    reducers: {
        isLoading: (state, action) => {
            // const newPhoto = action.payload;

            return state = action.payload;
        },
    }
});

const { reducer, actions } = loading;
export const { isLoading, getLoading } = actions;
export default reducer;