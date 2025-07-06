import { FaPlus, FaSearch } from "react-icons/fa";

interface SearchAndCreateProps{
    cleanData:()=>void;
    onOpen:()=>void;
    onSearch: (query: string) => void;
}


function SearchAndCreate({cleanData,onOpen,onSearch}:SearchAndCreateProps){
    return(
        <div className="flex justify-between bg-white rounded-lg shadow-md p-4 items-center gap-4 ">
            <form action="" className="flex items-center flex-1 rounded-md px-4 py-3 shadow-inner focus-within:ring-2 focus-within:ring-blue-400 transition">
                <FaSearch className="text-gray-400 mr-2" />
                <input type="text" className="bg-transparent outline-none w-full text-sm text-gray-700" placeholder="Buscar tareas"
                onChange={(e)=> onSearch(e.target.value)}/>
            </form>
            <button className="flex items-center gap-2 text-white font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-md transition-colors duration-300 hover:cursor-pointer"
            onClick={()=>{ cleanData(); onOpen(); }}>
                <FaPlus className="text-white" />
                Nueva Tarea
            </button>
        </div>
    )
}

export default SearchAndCreate;