import React from 'react';
import {useFormik} from "formik";

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

    return (
        <>
            <p className={"text-center text-2xl text-dark mb-4"}>Авторизоваться</p>
            <div className={styles.SignIn}>
                <a
                    href="http://localhost:4200"
                    className={"w-full text-center shadow px-4 py-2 bg-green text-light-blue hover:green/70"}
                >Клиент</a>
                <a
                    href="http://localhost:5000"
                    className={"w-full text-center shadow px-4 py-2 bg-red text-light-blue hover:bg-red/70"}
                >Менеджер</a>
            </div>
        </>
    );
};

export default SignIn;
