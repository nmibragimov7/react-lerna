import React from 'react';

import {useTodos} from "../../store";
import {TodoProps} from "../../model/types";
import styles from './Todo.module.scss';
import {Checkbox} from "@monorepo/shared/src";

interface IProps {
    item: TodoProps;
    className?: string;
}

const Todo: React.FC<IProps> = (props) => {
    const toggleTodo = useTodos(state => state.toggleTodo);
    const {
        item,
        className
    } = props;

    return (
        <div className={[styles.Todo, className].join(" ")}>
            <Checkbox name={`todo-${item.id}`} value={item.completed} setValue={() => toggleTodo(item.id)}>
                {item.title}
            </Checkbox>
        </div>
    );
};

export default Todo;
