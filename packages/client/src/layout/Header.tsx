import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {observer} from "mobx-react-lite";

import basketStore from "../store/basket";
import burger from "../assets/burger.svg";

interface IProps {
    setState: (value: boolean) => void;
}

const Header: React.FC<IProps> = observer(({ setState }) => {
    const total = basketStore.total;

    return (
        <>
            <div className={"bg-black/80 p-8"}>
                <div className={"container mx-auto flex justify-between items-center"}>
                    <Link to={"/"} className={"text-xl font-bold text-green hover:text-orange"}>CLIENT</Link>
                    <div className={"flex gap-8"}>
                        <Link to={"/"} className={"font-bold text-orange hover:text-blue"}>Главная</Link>
                        <Link to={"/goods"} className={"font-bold text-orange hover:text-blue"}>Товары</Link>
                    </div>
                    <div className={"relative cursor-pointer"} onClick={() => setState(true)}>
                        <img src={burger} alt="burger" className={"w-6 h-6 fill-primary-blue"}/>
                        <span className={"absolute right-[-10px] bottom-[-10px] text-blue text-sm leading-4 font-bold"}>{total}</span>
                    </div>
                </div>
            </div>
            <div className={"container mx-auto shadow-gray-100 min-h-[90vh]"}>
                <div className={"py-8 px-4"}>
                    <Outlet />
                </div>
            </div>
        </>
    );
});

export default Header;
