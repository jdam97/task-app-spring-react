import { useState } from 'react'

interface TabsProps {
  value: { total: number, pending: number, completed: number };
  done: (done:boolean|null) => void;
}


function Tabs({value,done}:TabsProps) {
  const [activeTab, setActiveTab] = useState<'Todas' | 'Pendientes' | 'Completadas'>('Todas');
  return (
    <div className='flex justify-between bg-white rounded-lg shadow-md p-3 gap-1'>
        <button className={`w-full ${activeTab=='Todas' ? 'text-blue-500 font-bold':' text-gray-700 font-bold'}  hover:cursor-pointer`}
        onClick={()=>{setActiveTab('Todas');done(null);}}>Todas({value.total})</button>
        <button className={`w-full ${activeTab=='Pendientes' ? 'text-orange-500 font-bold':' text-gray-700 font-bold '} hover:cursor-pointer `}
        onClick={()=>{setActiveTab( 'Pendientes');done(false);}}>Pendientes({value.pending})</button>
        <button className={`w-full ${activeTab=='Completadas'?'text-green-500 font-bold':'text-gray-700 font-bold'} hover:cursor-pointer `}
        onClick={()=>{setActiveTab( 'Completadas');done(true);}}>Completadas({value.completed})</button>  
    </div>
  )
}

export default Tabs;
