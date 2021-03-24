import { createSlice } from '@reduxjs/toolkit';

const initialLoading = {
    isError: false,
    message: '',
};


const loading = createSlice({
    name: 'errorlogin',
    initialState: initialLoading,
    reducers: {
        isErrorLogin: (state, action) => {
            // const newPhoto = action.payload;

            return state = action.payload;
        },
    }
});

const { reducer, actions } = loading;
export const { isErrorLogin } = actions;
export default reducer;