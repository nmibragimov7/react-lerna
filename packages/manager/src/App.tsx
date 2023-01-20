import React, {useState} from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom"

import Header from "./layout/Header";
import Main from "./pages/Main";
import Goods from "./pages/Goods";
import {StoreProvider} from "./components/StoreProvider";
import {Toasts} from "@monorepo/shared/src";

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route
                path={"/"}
                element={<Header />}
            >
                <Route index element={<Main />} />
                <Route path={"goods"} element={<Goods />} />
                <Route path={"*"} element={<Main />} />
            </Route>
        </>
    ));

    return (
        <>
            <StoreProvider>
                <Toasts />
                <RouterProvider router={router}/>
            </StoreProvider>
        </>
    )
}

export default App
