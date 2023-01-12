import create, {StateCreator} from "zustand";
import axios from "axios";
import {persist, PersistOptions} from "zustand/middleware";

import {
    SignInProps,
    TodoProps,
    UserProps
} from "../model/types";

interface ITodo {
    todos: TodoProps[];
    loading: boolean;
    error: string | null;
    addTodo: (value: string) => void;
    toggleTodo: (id: number) => void;
    fetchTodos: () => void;
}

interface IUser {
    user: UserProps | null;
    loading: boolean;
    error: string | null;
    signIn: (body: SignInProps) => any;
    logout: () => void
}

type MyPersist = (
    config: StateCreator<IUser>,
    options: PersistOptions<IUser>
) => StateCreator<IUser>

export const useTodos = create<ITodo>(
    (set, _) => ({
        todos: [],
        loading: false,
        error: null,
        addTodo: async (title: string) => {
            set({loading: true});
            try {
                const response: any = await axios.post("http://localhost:8000/todos", {
                    title
                });
                set({todos: response.data, error: null});
                return "todo успешно добавлен";
            } catch (e: any) {
                set({error: e.response.data.message});
                return e.response.data.message;
            } finally {
                set({loading: false});
            }
        },
        toggleTodo: async (id: number) => {
            set({loading: true});
            try {
                const response: any = await axios.put(`http://localhost:8000/todos/${id}`);
                set({todos: response.data, error: null});
            } catch (e: any) {
                set({error: e.response.data.message});
            } finally {
                set({loading: false});
            }
        },
        fetchTodos: async () => {
            set({loading: true});
            try {
                const response: any = await axios.get("http://localhost:8000/todos");
                set({todos: response.data, error: null});
            } catch (e: any) {
                set({error: e.response.data.message});
            } finally {
                set({loading: false});
            }
        }
    })
);

export const useUser = create<IUser>(
    (persist as MyPersist)(set => ({
            user: null,
            loading: false,
            error: null,
            signIn: async (body: SignInProps) => {
                set({loading: true});
                try {
                    const response: any = await axios.post("http://localhost:8000/sign-in", {
                        ...body
                    });
                    set({user: response.data, error: null});

                    return response;
                } catch (e: any) {
                    set({error: e.response.data.message});

                    return e.response;
                } finally {
                    set({loading: false});
                }
            },
            logout: () => {
                set({user: null, error: null});
            }
        }),
        {
            name: 'user'
        }
    )
);
