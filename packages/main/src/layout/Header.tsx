import React, {ReactNode} from 'react';
import {Link, Outlet} from "react-router-dom";

import {Button, Modal} from "@monorepo/shared/src";

interface IProps {
    isAuth?: boolean;
    logout?: () => void;
    state: boolean;
    setState: (value: boolean) => void;
    children?: ReactNode;
}

const Header: React.FC<IProps> = ({
                                      isAuth,
                                      logout,
                                      state,
                                      setState,
                                      children }) => {
    const buttonHandler = () => {
        if(isAuth) {
            logout && logout();
        } else {
            setState(true)
        }
    }

    return (
        <>
            <div className={"bg-blue p-6"}>
                <div className={"container mx-auto flex justify-between items-center"}>
                    <Link to={"/"} className={"text-xl font-bold text-green hover:text-orange"}>MAIN</Link>
                    <div className={"flex gap-8"}>
                        <Link to={"/"} className={"font-bold text-primary-blue hover:text-orange underline"}>Главная</Link>
                        <Link to={"/todos"} className={"font-bold text-primary-blue hover:text-orange underline"}>Todos</Link>
                    </div>
                    <Button
                        className={"max-w-[200px]"}
                        onClick={buttonHandler}
                    >
                        {isAuth ? "Выйти" : "Авторизация"}
                    </Button>
                </div>
            </div>
            <Modal state={state} setState={setState}>
                {children}
            </Modal>
            <div className={"container mx-auto py-8"}>
                <Outlet />
            </div>
        </>
    );
};

export default Header;
