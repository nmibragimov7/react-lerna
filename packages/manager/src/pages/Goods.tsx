import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import {goodsReducer} from "../store/slice/goods";
import {DynamicModuleLoader, ReducersList} from "../components/DynamicModuleLoader";
import {editGood, getGoods} from "../store/action/goods";
import {StateSchema} from "../core/config/stateSchema";
import {Good} from "../model/types";
import {useAppDispatch} from "../core/config/dispatch";
import {
    Button,
    Image,
    Spinner,
    Modal,
    Input
} from "@monorepo/shared/src";
import {useFormik} from "formik";
import {toast} from "@monorepo/shared/src/components/base/BaseToasts/BaseToasts";

const initialReducers: ReducersList = {
    goods: goodsReducer,
};

const Goods: React.FC = () => {
    const [state, setState] = useState(false);
    const dispatch = useAppDispatch();
    const data = useSelector((state: StateSchema)  => state.goods?.data);
    const isLoading = useSelector((state: StateSchema)  => state.goods?.isLoading);
    const formik = useFormik<Good>({
        initialValues: {
            id: 0,
            title: "",
            price: 0,
            image: "",
            description: ""
        },
        async onSubmit(values) {
            const response: any = await dispatch(editGood({
                ...values
            }));
            console.log(response)
            if (response.payload.status === 200) {
                setState(false);
                toast.success(response.payload.data.message);
                dispatch(getGoods());
            }
        }
    });
    const edit = useCallback((good: Good) => {
        setState(true);
        formik.setValues({...good});
    }, []);

    useEffect(() => {
        dispatch(getGoods());
    }, []);

    return (
        <>
            <DynamicModuleLoader
                removeAfterUnmount
                reducers={initialReducers}
            >
                <div>
                    {data?.map((good: Good) => <div key={good.id} className={"p-4 shadow-gray-100 mb-4"}>
                        <div className={"flex flex-col items-center mb-4"}>
                            <p className={"text-xl text-dark"}>{good.title} <span className={"text-gray-300"}>{good.price} $</span></p>
                            <p className={"text-dark mb-4"}>{good.description}</p>
                            <Image name={good.title} src={good.image} className={"w-60"}/>
                        </div>
                        <Button onClick={() => edit(good)}>Редактировать</Button>
                    </div>)}
                    {isLoading && <div className={"flex justify-center"}>
                        <Spinner />
                    </div>}
                </div>
            </DynamicModuleLoader>
            <Modal state={state} setState={setState}>
                <div className={"w-80 grid gap-4"}>
                    <p className={"text-center text-dark font-semibold"}>Редактирование</p>
                    <Input
                        name={"title"}
                        value={formik.values.title}
                        placeholder={"заголовок"}
                        onChange={formik.handleChange}
                    />
                    <Input
                        name={"price"}
                        type={"number"}
                        value={formik.values.price}
                        placeholder={"стоимость"}
                        onChange={formik.handleChange}
                    />
                    <Input
                        name={"description"}
                        value={formik.values.description}
                        placeholder={"описание"}
                        onChange={formik.handleChange}
                    />
                    <Input
                        name={"image"}
                        value={formik.values.image}
                        placeholder={"картинка"}
                        onChange={formik.handleChange}
                    />
                    <Button disabled={isLoading} onClick={formik.submitForm}>Сохранить</Button>
                </div>
            </Modal>
        </>
    );
};

export default Goods;
