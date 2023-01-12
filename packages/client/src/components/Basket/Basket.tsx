import React from 'react';
import {observer} from "mobx-react-lite";

import {classes} from "@monorepo/shared/src/core/helpers/classes";
import {Good} from "../../store/goods";
import basketStore from "../../store/basket";
import {toast} from "@monorepo/shared/src/components/base/BaseToasts/BaseToasts";
import close from "@monorepo/shared/src/static/images/close.svg";
import styles from "./Basket.module.scss";

const Basket: React.FC = observer(() => {
    const goods = basketStore.goods;
    const removeFromBasket = (good: Good) => {
        basketStore.removeFromBasket(good);
        const notification = basketStore.notification;
        toast.info(notification);
    }

    return (
        <>
            <p className={"text-center text-2xl text-white font-bold mb-4"}>Корзина</p>
            <div className={classes(styles.Basket)}>
                {
                    goods.map((good: Good) => (
                        <div key={good.id} className={"flex justify-between items-center bg-dark/80 shadow-gray-100 p-4"}>
                            <span className={"text-white"}>{good.title}</span>
                            <img src={close} alt="close img" className={"cursor-pointer w-4 h-4"} onClick={() => removeFromBasket(good)}/>
                        </div>
                    ))
                }
            </div>
        </>
    );
});

export default Basket;
