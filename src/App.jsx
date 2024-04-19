import { useState } from "react";
import Main from "../components/Main";

export default function App() {

  const data = []

  const [arr , setArr] = useState(data);

  function dataAddingFunction(newTask){
    const brr = [...arr , newTask];
    setArr(brr);
  }

  function dataDeletingFunction(deletingIndex){
    const brr = [...arr];
    brr.splice(deletingIndex , 1);
    setArr(brr);
  }

  function dataDoneFunction(doneIndex){
    console.log("done task number = " , doneIndex)
  }

  return (
    <>
      <div className=" w-full h-screen bg-yellow-300 flex justify-center items-center ">
        <Main dataAddingFunction = {dataAddingFunction} data={arr} dataDeletingFunction={dataDeletingFunction} dataDoneFunction={dataDoneFunction}/>
      </div>
    </>
    
  )
}