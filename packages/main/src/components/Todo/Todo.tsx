import React from 'react';

import BaseCheckbox from "@monorepo/shared/src/components/base/BaseCheckbox/BaseCheckbox";
import {useTodos} from "../../store";
import {TodoProps} from "../../model/types";
import styles from './Todo.module.scss';

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
            <BaseCheckbox name={`todo-${item.id}`} value={item.completed} setValue={() => toggleTodo(item.id)}>
                {item.title}
            </BaseCheckbox>
        </div>
    );
};

export default Todo;
