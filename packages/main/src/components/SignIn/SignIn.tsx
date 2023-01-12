import React, {ReactNode, useEffect} from 'react';
import {useFormik} from "formik";

import BaseInput from "@monorepo/shared/src/components/base/BaseInput/BaseInput";
import BaseButton from "@monorepo/shared/src/components/base/BaseButton/BaseButton";
import {useUser} from "../../store";
import {SignInProps} from "../../model/types";
import {toast} from "@monorepo/shared/src/components/base/BaseToasts/BaseToasts";
import styles from "./SignIn.module.scss";

interface IProps {
    setState: (value: boolean) => void;
}

const SignIn: React.FC<IProps> = ({ setState }) => {
    const {signIn} = useUser(state => ({
        signIn: state.signIn
    }));
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        async onSubmit(values: SignInProps) {
            const response = await signIn({
                ...values
            });
            if(response.status !== 200) {
                toast.error(response.data.message);
                return;
            }
            formik.resetForm();
            setState(false);
            let link = document.createElement("a");
            response.data.role === "manager" ? link.href = "http://localhost:5000" : link.href = "http://localhost:4200";
            link.click();
        }
    });
    useEffect(() => {
        return () => {
            formik.resetForm();
        }
    }, []);

    return (
        <>
            <p className={"text-center text-2xl text-dark mb-4"}>Авторизоваться</p>
            <div className={styles.SignIn}>
                <BaseInput
                    name={"username"}
                    value={formik.values.username}
                    placeholder={"введите логин"}
                    onChange={formik.handleChange}
                />
                <BaseInput
                    type={"password"}
                    name={"password"}
                    value={formik.values.password}
                    placeholder={"введите пароль"}
                    onChange={formik.handleChange}
                />
                <BaseButton onClick={formik.handleSubmit}>Войти</BaseButton>
            </div>
        </>
    );
};

export default SignIn;
