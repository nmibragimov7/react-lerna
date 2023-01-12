import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";

import BaseCart from "@monorepo/shared/src/components/base/BaseCart/BaseCart";
import BaseSpinner from "@monorepo/shared/src/components/base/BaseSpinner/BaseSpinner";
import BaseButton from "@monorepo/shared/src/components/base/BaseButton/BaseButton";
import BaseImage from "../../../shared/src/components/base/BaseImage/BaseImage";
import goodsStore, {Good} from "../store/goods";
import basketStore from "../store/basket";
import {toast} from "@monorepo/shared/src/components/base/BaseToasts/BaseToasts";

const Goods = observer(() => {
    const goods = goodsStore.goods;
    const loading = goodsStore.loading;
    const error = goodsStore.error;
    const fetchData = async () => {
        await goodsStore.fetchGoods();
    }
    const addToBasket = (good: Good) => {
        basketStore.addToBasket(good);
        const notification = basketStore.notification;
        toast.info(notification);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <p className={"text-center text-xl font-bold mb-4"}>
                Пакет @monorepo/client, в качестве стейт менеджмента используется <a
                href="https://mobx.js.org/README.html" target={"_blank"}
                className={"text-primary-blue hover:text-primary-blue/70 font-bold"}>mobx</a>
            </p>
            { error && <div className={"text-red text-center"}>{error}</div> }
            { loading && <div className={"flex justify-center"}>
                <BaseSpinner />
            </div> }
            <div className={"grid grid-cols-4 gap-4"}>
                {
                    !loading && goods.map((good: Good) =>
                        (<BaseCart key={good.id} title={good.title}>
                            <div className={"flex flex-col h-full p-4"}>
                                <p className={"text-gray-300"}>{good.description}</p>
                                <div className={"mt-auto mb-4"}>
                                    <BaseImage name={good.title} src={good.image} />
                                </div>
                                <BaseButton onClick={() => addToBasket(good)}>Добавить в корзину</BaseButton>
                            </div>
                        </BaseCart>))
                }
            </div>
        </>
    );
});

export default Goods;
