import React, { useState } from 'react'




function Tabs() {
  const [activeTab, setActiveTab] = useState<'Todas' | 'Pendientes' | 'Completadas'>('Todas');
  return (
    <div className='flex justify-between bg-white rounded-lg shadow-md p-3 gap-1'>
        <button className={`w-full ${activeTab=='Todas' ? 'text-blue-500 font-bold':' text-gray-700 font-bold'}  hover:cursor-pointer`}
        onClick={()=>{setActiveTab('Todas')}}>Todas(0)</button>
        <button className={`w-full ${activeTab=='Pendientes' ? 'text-orange-500 font-bold':' text-gray-700 font-bold '} hover:cursor-pointer `}
        onClick={()=>{setActiveTab( 'Pendientes')}}>Pendientes(0)</button>
        <button className={`w-full ${activeTab=='Completadas'?'text-green-500 font-bold':'text-gray-700 font-bold'} hover:cursor-pointer `}
        onClick={()=>{setActiveTab( 'Completadas')}}>Completadas(0)</button>  
    </div>
  )
}

export default Tabs;
