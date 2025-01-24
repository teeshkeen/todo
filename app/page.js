'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, toggleTask, deleteTask } from '../redux/actions';
import Link from 'next/link';

const Home = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);

  useEffect(() => {

    if (tasks.length === 0) {
      dispatch(fetchTasks());
    }
  }, [dispatch, tasks.length]);

  return (
    <div className='todo-list'>
      <h1 className='title'>Список задач</h1>
      <ul className='list'>
        {Array.isArray(tasks) && tasks.map(task => (
          <li className='list__item' key={task.id}>
            <span>
              {task.title}
            </span>
            <div className='list__item-btns'>
              {task.completed ? (
                <span className='status-done'>Выполнено</span>
              ) : (<span className='status-active'>Не выполнено</span>)}
              <button onClick={() => dispatch(toggleTask(task.id))}>Переключить</button>
              <Link href={`/tasks/${task.id}`}>
                <button>Подробнее</button>
              </Link>
              <button onClick={() => dispatch(deleteTask(task.id))}>Удалить</button>
            </div>
          </li>
        ))}
      </ul>
      <Link className='add-task__btn' href="/add-task"><button>Добавить задачу</button></Link>
    </div>
  );
};

export default Home;