import React, { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi';
import type { Task } from '../App';

interface ModalTaskProps {
    isOpen: boolean;
    onClose: () => void;
    addTask: (data: any) => void;
    initialData:Task|null;
    onEdit:(data:Task,id:number) => void;
}

function ModalTask({ isOpen, onClose, addTask,initialData,onEdit}: ModalTaskProps) {
    const [show, setShow] = useState(false);
    const [task, setTask] = useState<{
        id: number | undefined,
        title: string,
        description: string,
        date: Date,
        done: boolean
    }>({
        id: undefined,
        title: '',
        description: '',
        date: new Date(),
        done: false
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(initialData && task.id !== undefined){
            await onEdit(task,task.id)
        }else{
            
            await addTask(task);
        }
        onClose();
        cleanForm();
    }

    const formatDateForInput = (date: Date): string => {
        return new Date(date).toISOString().slice(0, 16);
      };
      const cleanForm = ()=>{
        setTask({
            id: undefined ,
            title: '',
            description: '',
            date: new Date(),
            done: false
        });
      }
      useEffect(()=>{
        if(initialData){
            setTask({
            id: initialData.id,
            title: initialData.title,
            description: initialData.description,
            date: new Date(initialData.date),
            done: initialData.done
            })
        }
        else{
            cleanForm();
        }
    },[initialData,isOpen])

    useEffect(() => {
        if (isOpen) {
            setShow(true);
        } else {
            setTimeout(() => setShow(false), 500);
        }
    }, [isOpen]);

   

    if (!isOpen && !show) return null;
    return (
        <div
        onClick={onClose}
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${isOpen ? 'bg-black/50 opacity-100' : 'bg-black/0 opacity-0'
                }`}
        >
            <form
                onSubmit={handleSubmit}
                className={`bg-white p-2 sm:p-6 rounded-lg w-full max-w-xs sm:max-w-md md:max-w-lg shadow-lg transform transition-all duration-500 ease-in-out
            ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
                onClick={(e) => e.stopPropagation()} >

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Agregar Nueva Tarea</h2>
                    <button
                        type='button'
                        className="text-gray-500 hover:text-black text-xl cursor-pointer"
                        onClick={onClose}
                    >
                        <FiX />
                    </button>
                </div>


                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Título</label>
                    <input
                        type="text"
                        placeholder="Título de la tarea"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        onChange={(e) => setTask({ ...task, title: e.target.value })}
                        value={task.title}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Descripción</label>
                    <textarea
                        placeholder="Descripción opcional"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none h-20 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        onChange={(e) => setTask({ ...task, description: e.target.value })}
                        value={task.description}
                    />
                </div>

                <div className="flex gap-4 mb-6">
                    <div className="w-full">
                        <label className="block text-sm font-medium mb-1">Fecha</label>
                        <input
                            type="datetime-local"
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            onChange={(e) => setTask({ ...task, date: new Date(e.target.value) })}
                            value={formatDateForInput(task.date)}
                        />
                    </div>
                </div>
                <div className="flex justify-between">
                    <button
                        type='submit'
                        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 text-sm hover:transition hover:duration-300 cursor-pointer">
                        Agregar Tarea
                    </button>
                    <button
                        type='button'
                        onClick={onClose}
                        className="px-4 py-2 rounded border border-gray-300 text-sm text-gray-700 hover:text-black hover:transition hover:duration-300 hover:bg-gray-200 cursor-pointer "
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}
export default ModalTask;