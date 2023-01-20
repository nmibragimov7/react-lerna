import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <>
            <div className={"bg-primary-blue/80 p-8"}>
                <div className={"container mx-auto flex justify-between items-center"}>
                    <Link to={"/"} className={"text-xl font-bold text-white hover:text-orange"}>MANAGER</Link>
                    <div className={"flex gap-8"}>
                        <Link to={"/"} className={"font-bold text-white hover:text-blue"}>Главная</Link>
                        <Link to={"/goods"} className={"font-bold text-white hover:text-blue"}>Товары</Link>
                    </div>
                </div>
            </div>
            <div className={"container mx-auto min-h-[90vh]"}>
                <div className={"py-8 px-4"}>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Header;
