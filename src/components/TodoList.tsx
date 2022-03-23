import React, { useCallback } from 'react';
import { List } from 'react-virtualized'
import TodoListItem from "./TotoListItem";
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }: { todos: any, onRemove: Function, onToggle: Function }) => {
    const rowRenderer = useCallback(({ index, key, style }: { index: any, key: any, style: any }) => {
        const todo = todos[index];
        return <TodoListItem 
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style}
                />
    },[onRemove, onToggle, todos]);
    return (
        <List 
            className="TodoList"
            width={512}
            height={513}
            rowCount={todos.length}
            rowHeight={57}
            rowRenderer={rowRenderer}
            list={todos}
            style={{ outline: "none" }}
        />
    );
}

export default React.memo(TodoList)