import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";

import BaseButton from "../components/base/BaseButton/BaseButton";

const Header: React.FC = () => {
    const [shown, setShown] = useState(false);

    return (
        <>
            <div className={"bg-blue p-4"}>
                <div className={"container mx-auto flex justify-between items-center"}>
                    <div className={"flex gap-8"}>
                        <Link to={"/"} className={"font-bold text-primary-blue hover:text-orange underline"}>Главная</Link>
                        <Link to={"/todos"} className={"font-bold text-primary-blue hover:text-orange underline"}>Todos</Link>
                    </div>
                    <BaseButton className={"max-w-[200px]"} onClick={() => setShown(true)}>Войти</BaseButton>
                </div>
            </div>
            <div className={"container mx-auto py-8"}>
                <Outlet />
            </div>
        </>
    );
};

export default Header;
