import React from 'react'
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import './styles.css'

const TodoList = ({todos, onToggle, remove}) => {

  return (
    <>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span
                className={["todo", todo.checked ?
                "checked": ""].join(" ")}
                onClick={()=> onToggle && onToggle(todo)}
                onKeyPress={()=> onToggle && onToggle(todo)}
                role="button"
                >{todo.title}
              </span>

              <button
                className="remove"
                type="button"
                onClick={()=> remove && remove(todo)}>
                <MdDelete size={28} />
              </button>

            </li>
          ))}
        </ul>
    </>
  )
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				title: PropTypes.string.isRequired,
				checked: PropTypes.bool.isRequired,
			})
	).isRequired,
	onToggle: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
};

export default TodoList
