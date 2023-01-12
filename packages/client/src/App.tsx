import React, {useState} from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom"

import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Main from "./pages/Main";
import Goods from "./pages/Goods";
import Basket from "./components/Basket/Basket";
import BaseToasts from "@monorepo/shared/src/components/base/BaseToasts/BaseToasts";

function App() {
    const [state, setState] = useState(false);
    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route
                path={"/"}
                element={<Header setState={setState} />}
            >
                <Route index element={<Main />} />
                <Route path={"goods"} element={<Goods />} />
                <Route path={"*"} element={<Main />} />
            </Route>
        </>
    ));

    return (
        <>
            <BaseToasts />
            <RouterProvider router={router}/>
            <Sidebar shown={state} setState={setState}>
                <Basket />
            </Sidebar>
        </>
    )
}

export default App
