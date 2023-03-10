import React from 'react';
import {useFormik} from "formik";

import {useUser} from "../../store";
import {SignInProps} from "../../model/types";
import styles from "./SignIn.module.scss";
import {toast} from "@monorepo/shared/src/components/base/BaseToasts/BaseToasts";

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
            response.data.role === "manager" ? link.href = process.env.REACT_APP_HOST_MANAGER || "http://localhost:5000" : link.href = process.env.REACT_APP_HOST_CLIENT || "http://localhost:4200";
            link.click();
        }
    });
    console.log(process.env.REACT_APP_HOST_MANAGER)
    console.log(process.env.REACT_APP_HOST_CLIENT)

    return (
        <>
            <p className={"text-center text-2xl text-dark mb-4"}>Авторизоваться</p>
            <div className={styles.SignIn}>
                <a
                    href="https://dashing-boba-2dc719.netlify.app/"
                    className={"w-full text-center shadow px-4 py-2 bg-green text-light-blue hover:green/70"}
                >Клиент</a>
                <a
                    href="https://helpful-pothos-66d078.netlify.app/"
                    className={"w-full text-center shadow px-4 py-2 bg-red text-light-blue hover:bg-red/70"}
                >Менеджер</a>
            </div>
        </>
    );
};

export default SignIn;
