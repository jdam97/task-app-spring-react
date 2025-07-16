import { useState } from 'react'
import { FiEdit,FiTrash  } from 'react-icons/fi';
import type { Task } from '../App';
import axios from 'axios';

interface CardTaskProps extends Task {
  onTaskStatusChange?: () => void;
  onDelete: (id:any)=>void;
  selectTask:(task:Task)=>void;
  openModal:(openModal:boolean)=>void;
}

function CardTask({id,title,description,date,done,onTaskStatusChange,onDelete,selectTask,openModal}:CardTaskProps) {

  const [marcado,setMarcado] = useState(done);
  const handleChange = async (e: any) => {
    const checked = e.target.checked;
    setMarcado(checked);
    await changeState(checked);
    onTaskStatusChange?.();
  };
  
  const changeState = async (checked: boolean) => {
    const urlBase = import.meta.env.VITE_API_URL;
    const url = urlBase+`/task/done/${id}?done=${checked}`;
    console.log(checked);
    await axios.put(url);
  };



  return (
    <div className={`flex justify-between items-start bg-white rounded-lg shadow-md p-4 w-full ${marcado?'opacity-60 line-through':'opacity-100'}`}>
    <div className="flex flex-col">
      <div className="flex items-center mb-2 gap-2">
        <input type="checkbox" checked={marcado} onChange={handleChange}/>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-gray-500 text-sm mb-3">{description}</p>
      <p className="text-gray-400 text-xs">
        {new Date(date).toLocaleDateString('es-CO', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
      </p>
    </div>

    <div className="flex gap-3 mt-1">
      <button>
        <FiEdit className="w-5 h-5 text-gray-600 hover:text-blue-500 hover:cursor-pointer" 
        onClick={()=>{selectTask({id,title,description,date,done}),openModal(true)}}/>
      </button>
      <button>
        <FiTrash className="w-5 h-5 text-red-500 hover:text-red-700 hover:cursor-pointer" 
        onClick={()=>{onDelete(id)}}/>
      </button>
    </div>
  </div>
  )
}
export default CardTask;