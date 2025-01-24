'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../redux/actions';
import { useRouter } from 'next/navigation';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const tasks = useSelector(state => state.tasks.tasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
    const newTask = { id: newId, title, completed: false };
    dispatch(addTask(newTask));
    router.push('/');
  };

  return (
    <form className='add-task' onSubmit={handleSubmit}>
      <input
      className='add-task__input'
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Введите вашу задачу"
        required
      />
      <button type="submit">Добавить задачу</button>
    </form>
  );
};

export default AddTask;