import {useDispatch} from "react-redux";
import {createReduxStore} from "../../store";

const store = createReduxStore();
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
