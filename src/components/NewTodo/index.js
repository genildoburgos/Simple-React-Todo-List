import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './styles.css'

const NewTodo = ({onNewTodo}) => {
    const [value, setValue] = useState('');

    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const erase = () => {
        setValue('');
    };

    const submit = () => {
        if(!onNewTodo){
            return;
        }

        onNewTodo(value);
        erase();
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.which === ENTER_KEY) {
            submit();
        } else if (e.which === ESCAPE_KEY) {
            erase();
        }
    };

    return (
        <>
            <input
            className="new-todo"
            placeholder="O que precisa ser feito?"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            />
        </>
    )
}

NewTodo.PropTypes = {
	onNewTodo: PropTypes.func.isRequired,
}

export default NewTodo
