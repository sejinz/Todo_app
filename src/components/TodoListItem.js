import React from 'react'
import classNames from 'classnames'; //조건부 스타이링
import { MdCheckBox, MdRemoveCircleOutline, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import '../styles/TodoListItem.scss'

function TodoListItem({todo,onToggle,onRemove}) {
  const {id, text, checked} = todo;

  return (
    <div className='TodoListItem'>
      <div className={classNames('Checkbox' ,{checked})} onClick={()=>onToggle(id)}>
        {checked ? <MdCheckBox />:<MdOutlineCheckBoxOutlineBlank />}
              <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={() =>onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}

export default TodoListItem