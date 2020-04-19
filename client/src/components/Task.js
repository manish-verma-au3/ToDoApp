import React, {useState, useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext';
import { useHistory } from 'react-router-dom';

const Task = ({ task }) => {
  const history = useHistory();
  const { removeTask, findItem } = useContext(TaskListContext);
  const [isChecked, setisChecked] = useState(false)
 
  
  const toggleChange = () => {
    // sessionStorage.setItem('checkval', true);
    // var ab = sessionStorage.getItem('checkval')
    // console.log(ab)
    // setisChecked({
    //     isChecked: ab
    // });
  }

  const taskDetails = () => {
      console.log('clicked');
      history.push("/details", task.id);
  }
  return (
    <li className="list-item" >
      <span onClick={() => taskDetails()}>{task.title} </span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>{' '}
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <i className="fas fa-pen"></i>
        </button>{' '}
        <input type="checkbox"
          
          onChange={() => toggleChange()}
        />
      </div>
    </li>
  )
}

export default Task