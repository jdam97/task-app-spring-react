import { useEffect, useState } from 'react'
import './App.css'
import CardsInfo from './components/CardsInfo'
import { FaCalendarAlt, FaRegCircle, FaCheckCircle } from 'react-icons/fa';
import SearchAndCreate from './components/SearchAndCreate';
import Tabs from './components/Tabs';
import TaskList from './components/TaskList';
import axios from 'axios';

export interface Task{
  id:number;
  title:string;
  description:string;
  date:Date;
  done:boolean;
}


function App() {
  //hooks
  const [tasks,setTasks] = useState<Task[]>([]);

  const allTasks= async()=>{
    const urlBase = 'http://localhost:8080/api';
      const result = await axios.get(urlBase+'/tasks')
      setTasks(result.data.data);
  }
  
  useEffect(()=>{
    allTasks();
  },[])


  return (
    <div className='flex justify-center'>
      <div className='p-6 max-w-[56rem]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text '>Mi Lista de Tareas</h1>
          <p className='text-gray-600 mt-2'>Organiza tu día de manera eficiente</p>
        </div>
        <div className='flex justify-center p-3 gap-4'>
          <CardsInfo
          title='Total'
          value={0}
          icon={<FaCalendarAlt className='text-blue-500 bg-blue-100 p-2 rounded-md text-4xl'/>}
          valueClassName = "text-blue-500"
          />
          <CardsInfo
          title='Pendientes'
          value={0}
          icon={<FaRegCircle className='text-orange-500 bg-orange-100 p-2 rounded-md text-4xl'/>}
          valueClassName = "text-orange-500"
          />
          <CardsInfo
          title='Completadas'
          value={0}
          icon={<FaCheckCircle className='text-green-500 bg-green-100 p-2 rounded-md text-4xl'/>}
          valueClassName = "text-green-500"
          />
        </div>
        <div className='flex flex-col gap-5'>
          <SearchAndCreate/>
        <div className='flex flex-col gap-6'>
          <Tabs/>
          <TaskList
          data={tasks}
          state='todas' />
        </div>
        </div>
      </div>
      
    </div>
   
  )
}

export default App
