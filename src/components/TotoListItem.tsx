import classNames from 'classnames';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TotoListItem.scss'
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle }: { todo: any, onRemove: Function, onToggle: Function }) => {

    const { id, text, checked } = todo;

    return (
        <div className='TodoListItem'>
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );

}

export default TodoListItem