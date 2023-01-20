import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Good, GoodsSchema} from "../../model/types";
import {editGood, getGoods} from "../action/goods";

const initialState: GoodsSchema = {
    data: [],
    isLoading: false,
    error: ""
};

export const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        setGoods: (state, action: PayloadAction<Good[]>) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getGoods.pending, (state) => {
                state.error = "";
                state.isLoading = true;
            })
            .addCase(getGoods.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(getGoods.rejected, (state, payload: any) => {
                state.isLoading = false;
                state.error = payload?.message || "Неизвестная ошибка";
            })
            .addCase(editGood.pending, (state) => {
                state.error = "";
                state.isLoading = true;
            })
            .addCase(editGood.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editGood.rejected, (state, payload: any) => {
                state.isLoading = false;
                state.error = payload?.message || "Неизвестная ошибка";
            });
    },
});

export const {actions: goodsActions} = goodsSlice;
export const {reducer: goodsReducer} = goodsSlice;
