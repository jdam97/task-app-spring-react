import { useEffect, useState } from 'react'
import './App.css'
import CardsInfo from './components/CardsInfo'
import { FaCalendarAlt, FaRegCircle, FaCheckCircle } from 'react-icons/fa';
import SearchAndCreate from './components/SearchAndCreate';
import Tabs from './components/Tabs';
import TaskList from './components/TaskList';
import axios from 'axios';
import ModalTask from './components/ModalTask';

export interface Task{
  id:number|undefined;
  title:string;
  description:string;
  date:Date;
  done:boolean;
}

export interface CountTasks{
  total:number;
  pending:number;
  completed:number;
}




function App() {
  //hooks
  const [tasks,setTasks] = useState<Task[]>([]);
  const [countTasks,setCountTasks] = useState<CountTasks>({total:0,pending:0,completed:0});
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [done,setDone] = useState<boolean | null>(null);
  const [isOpen,setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  
  const urlBase = import.meta.env.VITE_API_URL;
  //Listar todas las tareas
  const allTasks= async(urlBase:any)=>{
    let result;
    if(done==null){
    result = await axios.get(urlBase+`/tasks`)
    }else{
    result = await axios.get(urlBase+`/tasks?done=${done}`)
    }
    setTasks(result.data.data);
  }

  //Eliminar tareas
  const deleteTask = async (id:any)=>{
    try {
      const result = await axios.delete(urlBase+`/task/${id}`);
      console.log(result)
      refreshData();
    } catch (error) {
      console.error("Error al eliminar tareas:", error);
    }
  
}

//Agregar tarea
const addTask = async(data:any)=>{
  try {
    const response = await axios.post(urlBase+'/task',data)
    console.log(response)
    refreshData();
  } catch (error) {
    console.log(error);
  }
}

//Editar tarea
const editTask = async(data:Task,id:number)=>{
  try {
    const response = await axios.put(urlBase+`/task/${id}`,data)
    
    refreshData();
  } catch (error) {
    console.error("Error al editar tarea:", error);
  }
}

  //Contar las tareas
  const getCountTasks=async(urlBase:any)=>{
    const result = await axios.get(urlBase+'/tasks/count');
    setCountTasks(result.data.data);
  }

  //Refresh
  const refreshData=()=>{
    allTasks(urlBase);
    getCountTasks(urlBase);
  }

  //Filtrar
  const filteredTasks = tasks.filter((task) => {
    const query = searchQuery.toLowerCase();
    return (
      task.title.toLowerCase().includes(query) ||
      task.description.toLowerCase().includes(query)
    );
  });
  
  useEffect(()=>{
    refreshData();
  },[done])


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
          value={countTasks.total}
          icon={<FaCalendarAlt className='text-blue-500 bg-blue-100 p-2 rounded-md text-4xl'/>}
          valueClassName = "text-blue-500"
          />
          <CardsInfo
          title='Pendientes'
          value={countTasks.pending}
          icon={<FaRegCircle className='text-orange-500 bg-orange-100 p-2 rounded-md text-4xl'/>}
          valueClassName = "text-orange-500"
          />
          <CardsInfo
          title='Completadas'
          value={countTasks.completed}
          icon={<FaCheckCircle className='text-green-500 bg-green-100 p-2 rounded-md text-4xl'/>}
          valueClassName = "text-green-500"
          />
        </div>
        <div className='flex flex-col gap-5'>
          <SearchAndCreate
          cleanData={()=> setSelectedTask(null)}
          onOpen={()=>setIsOpen(true)}
          onSearch={setSearchQuery}/>
        <div className='flex flex-col gap-6'>
          <Tabs
          value={countTasks}
          done={setDone}
          />
          <TaskList
          data={filteredTasks}
          state='todas'
          onTaskStatusChange={refreshData}
          onDelete={deleteTask}
          selectTask={setSelectedTask}
          openModal={setIsOpen}/>
        </div>
        </div>
      </div>
      <ModalTask
      addTask={addTask}
      isOpen={isOpen}
      onClose={()=>{setIsOpen(false); setSelectedTask(null);}}
      initialData={selectedTask}
      onEdit={editTask}/>
    </div>
   
  )
}

export default App
