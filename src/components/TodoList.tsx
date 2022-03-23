import TodoListItem from "./TotoListItem";
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }: { todos: any, onRemove: Function, onToggle: Function }) => {
    return (
        <div className="TodoList">
            {todos.map((todo: any) => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default TodoList