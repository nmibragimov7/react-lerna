import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {User, UserSchema} from "../../model/types";

const initialState: UserSchema = {
    data: null,
    isLoading: false,
    error: ""
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setGoods: (state, action: PayloadAction<User>) => {
            state.data = action.payload;
        }
    },
    extraReducers: () => {},
});

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;
