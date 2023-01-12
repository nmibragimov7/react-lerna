import {makeAutoObservable} from "mobx";

import {Good} from "./goods";

class Basket {
    goods: Good[] = [];
    total: number = 0;
    notification: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    addToBasket(good: Good) {
        this.notification = "";
        if(this.goods.find(item => item.id === good.id)) {
            this.notification = "Товар уже в корзине";
            return;
        }
        this.goods.push(good);
        this.total++;
        this.notification = "Товар добавлен в корзину";
    }

    removeFromBasket(good: Good) {
        this.notification = "";
        this.goods = this.goods.filter((_good: Good) => _good.id !== good.id);
        this.total--;
        this.notification = "Товар удален из корзины";
    }
}

export default new Basket();
