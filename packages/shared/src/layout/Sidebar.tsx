import React from 'react';

import {classes} from "../core/helpers/classes";
import close from '../static/images/close.svg';

interface IProps {
    shown: boolean;
    setState: (value: boolean) => void;
    className?: string;
    children: React.ReactNode;
}

const Sidebar: React.FC<IProps> = (props) => {
    const {
        shown,
        setState,
        className,
        children
    } = props;

    return (
        <div className={
            classes(
                "fixed top-0 right-0 bottom-0 translate-x-full transition-all w-full max-w-xs shadow-gray-100 py-16 px-4 shadow-gray-100 bg-light-blue",
                className || "",
                {"!translate-x-0": shown}
            )}
        >
            <img
                src={close}
                alt={"close icon"}
                className={"absolute top-4 right-4 cursor-pointer"}
                onClick={() => setState(false)}
            />
            <div>
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
