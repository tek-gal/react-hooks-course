import React, { useContext } from 'react';
import { Context } from './context';
import { REMOVE_TODO, TOGGLE_TODO } from './types';

export default function TodoItem({title, id, completed}) {
  const klass = ['todo'];
  const { dispatch } = useContext(Context);

  if (completed) {
    klass.push('completed');
  }

  return (
    <li className={klass.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch({
            type: TOGGLE_TODO,
            payload: id,
          })}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick={() =>  dispatch({
            type: REMOVE_TODO,
            payload: id,
          })}
        >
          delete
        </i>
      </label>
    </li>
  )
}
