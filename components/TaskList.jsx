import { useState } from "react";

export default function TaskList(props) {
    const data = props.data;

    // State to track which tasks are done
    const [doneTasks, setDoneTasks] = useState([]);

    // Function to handle task completion
    function handleClickDone(i) {
        // Toggle the completion status of the task
        const updatedDoneTasks = doneTasks.includes(i)
            ? doneTasks.filter(taskIndex => taskIndex !== i)
            : [...doneTasks, i];
        setDoneTasks(updatedDoneTasks);
    }

    // Function to handle task deletion
    function handleClickDelete(i) {
        props.dataDeletingFunction(i);
    }

    return (
        <>
            <div className="w-full h-full bg-blue-200 overflow-auto">
                {data.map((task, i) => {
                    const isDone = doneTasks.includes(i);
                    return (
                        <div
                            key={i}
                            className={`h-16 my-5 px-2 w-full flex gap-6 items-center justify-between border-solid border-2 border-black ${
                                isDone ? "bg-green-200" : ""
                            }`}
                        >
                            <h1>{task}</h1>
                            <div className="flex">
                                <button
                                    onClick={() => {
                                        handleClickDone(i);
                                    }}
                                    className="bg-blue-200 hover:bg-blue-500 text-black hover:text-white font-bold py-4 px-4 rounded-full flex items-center space-x-2"
                                >
                                    <i className="ri-check-line"></i>
                                </button>
                                <button
                                    onClick={() => {
                                        handleClickDelete(i);
                                    }}
                                    className="bg-blue-200 hover:bg-blue-500 text-black hover:text-white font-bold py-4 px-4 rounded-full flex items-center space-x-2"
                                >
                                    <i className="ri-close-line"></i>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
