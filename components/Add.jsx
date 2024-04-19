import { useState } from "react";

export default function Add(props){

    const [task , setTask] = useState("");

    function addTaskButton(){
        console.log("help")
        let newT = task;
        props.dataAddingFunction(newT);
        setTask("");
    }
    function handleChange(event) {
        setTask(event.target.value);
    }

    return (
        <>
            <div className=" w-full h-14 backdrop-blur-sm bg-amber-400 rounded-xl flex justify-evenly items-center">
                
                <input value={task} onChange={handleChange} type="text" placeholder="Add" class="w-3/4 py-2 px-4 rounded-md border border-black focus:outline-none focus:border-blue-500 bg-amber-400 " />

                <button onClick={addTaskButton} class="bg-blue-200 hover:bg-blue-500 text-black hover:text-white font-bold py-4 px-4 rounded-full flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 2a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6v6a1 1 0 1 1-2 0v-6H3a1 1 0 1 1 0-2h6V3a1 1 0 0 1 1-1z" clip-rule="evenodd" />
                    </svg>
                </button>

            </div>
        </>
    )
}