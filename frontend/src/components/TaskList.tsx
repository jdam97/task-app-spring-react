import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import CardTask from './CardTask';
import type { Task } from '../App';

interface TaskListProps {
    data: any[];
    state: String;
    onTaskStatusChange: () => void;
    onDelete:(id:any)=>void;
    selectTask:(task:Task)=>void;
    openModal:(openModal:boolean)=>void;
}


function TaskList({ data,onTaskStatusChange,onDelete,selectTask,openModal }: TaskListProps) {
    
    return (
        <div className='p-7 '>
            {(data.length>0) ?
                <div className='flex flex-col gap-2'>
                    {data.map((task,index)=>(
                        <CardTask
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        date={task.date}
                        done={task.done}
                        onTaskStatusChange={onTaskStatusChange}
                        onDelete={onDelete}
                        selectTask={selectTask}
                        openModal={openModal}
                        />
                    ))}
                </div>
                :
                <div className=' bg-white rounded-lg shadow-md'>
                    <div className='flex flex-col items-center p-8 gap-2'>
                        <FaCalendarAlt className='w-12 h-12 text-gray-400' />
                        <p className=' text-gray-400'>No hay tareas en esta categoría</p>
                    </div>

                </div>


            }
        </div>
    )
}
export default TaskList;