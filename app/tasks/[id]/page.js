'use client';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import { toggleTask } from '../../../redux/actions';

const TaskDetail = ({ params }) => {
    const { id } = use(params);
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);
    const task = tasks.find(task => task.id === Number(id));
    const router = useRouter();

    const handleToggle = () => {
        dispatch(toggleTask(task.id));
    };

    if (!task) {
        return <div>Задача не найдена :C</div>;
    }

    return (
        <div className='task-detail'>
            <button className='back-btn' onClick={() => router.push('/')}>Вернуться на главную</button>
            <div className='task-detail__inner'>
                <div className='task-detail__text'>
                    <span>{task.title},</span>
                    <p>ID: {task.id},</p>
                    <p>Выполнена: {task.completed ? 'Да' : 'Нет'}</p>
                </div>
                <button onClick={handleToggle}>
                    {task.completed ? 'Отменить выполнение' : 'Выполнить'}
                </button>
            </div>
        </div>

    );
};

export default TaskDetail;