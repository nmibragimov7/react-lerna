import {makeAutoObservable} from "mobx";
import axios from "axios";

export interface Good {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number
}

class Goods {
    private _goods: Good[] = [];
    private _loading = false;
    private _error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    get total(): number {
        return this._goods.length;
    }

    get goods(): Good[] {
        return this._goods;
    }

    get loading(): boolean {
        return this._loading;
    }

    get error(): string | null {
        return this._error;
    }

    async fetchGoods() {
        this._loading = true;
        try {
            const response = await axios.get("http://localhost:8000/goods");
            if (response.status !== 200) throw new Error("Ошибка при загрузке данных");
            this._goods = response.data;
            this._error = null;
        } catch (e: any) {
            this._error = e.message;
        } finally {
            this._loading = false;
        }
    }
}

export default new Goods();
