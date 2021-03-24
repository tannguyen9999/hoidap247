import { createSlice } from '@reduxjs/toolkit';

const initialListUser = [];


const getListUser = createSlice({
    name: 'listUser',
    initialState: initialListUser,
    reducers: {
        addUser: (state, action) => {
            return state = action.payload;
        }
    }
});

const { reducer, actions } = getListUser;
export const { addUser } = actions;
export default reducer;