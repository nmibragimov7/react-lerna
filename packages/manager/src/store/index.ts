import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';

import {StateSchema} from '../core/config/stateSchema';
import {createReducerManager} from '../core/config/reducerManager';
import {userReducer} from "./slice/user";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
