import React from 'react';
import {
    RouterProvider,
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

import Main from "./Main";
import Todos from "./Todos";
import Header from "@monorepo/shared/src/layout/Header";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path={"/"} element={<Header />}>
            <Route index element={<Main />} />
            <Route path={"todos"} element={<Todos />} />
            <Route path={"*"} element={<Main />} />
        </Route>
    </>
));

const Pages = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default Pages;
