import {
    AnyAction,
    Reducer,
    ReducersMapObject,
    EnhancedStore
} from '@reduxjs/toolkit';
import {CombinedState} from 'redux';

import {GoodsSchema, UserSchema} from '../../model/types';

export interface StateSchema {
    // Синхронные редюсеры
    user: UserSchema;

    // Асинхронные редюсеры
    goods?: GoodsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
