import React, {useState} from 'react';
import shallow from "zustand/shallow";
import {useFormik} from "formik";

import Todo from "../components/Todo/Todo";
import BaseButton from "@monorepo/shared/src/components/base/BaseButton/BaseButton";
import BaseInput from "@monorepo/shared/src/components/base/BaseInput/BaseInput";
import Sidebar from "@monorepo/shared/src/layout/Sidebar";
import {useTodos} from "../store";
import {TodoProps} from "../model/types";

const Todos = () => {
    const [shown, setShown] = useState(false);
    const count = useTodos(state => state.todos.length);
    const { todos, loading, error, addTodo, fetchTodos } = useTodos(state => ({
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        addTodo: state.addTodo,
        fetchTodos: state.fetchTodos
    }), shallow);
    const formik = useFormik({
        initialValues: {
            title: ""
        },
        onSubmit(values) {
            setShown(false);
            addTodo(values.title);
            formik.resetForm();
        }
    });

    return (
        <>
            <div className={"container mx-auto min-h-[50vh] py-8"}>
                <div className={"flex justify-center"}>
                    <BaseButton disabled={loading} className={"!bg-gray-100 !text-dark max-w-xs mx-auto mb-8"} onClick={fetchTodos}>
                        {!error ? "Get todos" : error}
                    </BaseButton>
                </div>
                <div className={"flex flex-col gap-2 max-w-md mx-auto"}>
                    {todos.map((todo: TodoProps) => (
                        <Todo key={todo.id} item={todo}/>
                    ))}
                </div>
            </div>
            <div className={"w-full h-px bg-gray-100"}/>
            <div className={"max-w-3xl mx-auto min-h-[50vh] py-8 flex flex-col items-center"}>
                <div className={"text-center font-bold text-dark mb-4"}>Количество todos: { count }</div>
                <BaseButton
                    className={"mb-8 max-w-xs !bg-green !text-white"}
                    onClick={() => setShown(true)}
                >Добавить todo</BaseButton>
            </div>
            <Sidebar shown={shown} setState={setShown}>
                <BaseInput
                    name={"title"}
                    value={formik.values.title}
                    placeholder={"Напишите заголовок..."}
                    onChange={formik.handleChange}
                />
                <BaseButton onClick={formik.handleSubmit}>Добавить</BaseButton>
            </Sidebar>
        </>
    );
};

export default Todos;
