import React, {useState} from 'react';
import {
    RouterProvider,
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

import Main from "./Main";
import Todos from "./Todos";
import SignIn from "../components/SignIn/SignIn";
import Header from "../layout/Header";
import {Toasts} from "@monorepo/shared/src";
import {useUser} from "../store";

const Pages = () => {
    const [state, setState] = useState(false);
    const {user, logout} = useUser(state => ({
        user: state.user,
        logout: state.logout
    }));

    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route
                path={"/"}
                element={<Header
                    isAuth={!!user}
                    logout={logout}
                    state={state}
                    setState={setState}
                    children={<SignIn setState={setState}/>
                    }
                />}
            >
                <Route index element={<Main />} />
                <Route path={"todos"} element={<Todos />} />
                <Route path={"*"} element={<Main />} />
            </Route>
        </>
    ));

    return (
        <>
            <Toasts />
            <RouterProvider router={router}/>
        </>
    );
};

export default Pages;
