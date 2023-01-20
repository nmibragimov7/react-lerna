import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import {Good} from "../../model/types";
import {goodsActions} from "../slice/goods";

export const getGoods = createAsyncThunk<Good[]>(
    'goods/getGoods',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<Good[]>('http://localhost:8000/goods');
            thunkAPI.dispatch(goodsActions.setGoods(response.data));

            return response.data;
        } catch (e: any) {
            console.dir(e);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    },
);

export const editGood = createAsyncThunk(
    'goods/editGood',
    async (good: Good, thunkAPI) => {
        try {
            return await axios.put(`http://localhost:8000/goods/${good.id}`, good);
        } catch (e: any) {
            console.dir(e);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    },
);
