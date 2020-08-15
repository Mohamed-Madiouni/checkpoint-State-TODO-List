import React, { useState } from "react";
import Result from "./result";
import { Animate } from "react-animate-mount";
import { useEffect } from "react";

function TaskRead() {
  const [task, setTask] = useState("");
  const [result, setResult] = useState([]);
  const [inp, setInp] = useState("");
  const [clas, setClas] = useState("inp1");
  const [stop, setStop] = useState(1);
  const [dat, setDat] = useState([]);
  const [rows, setRows] = useState(1);
  const [com,setCom]= useState(false)
  const stopfunc = (x) => setStop(x);

  function formatDate() {
    let d = new Date();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    const minutes = d.getMinutes();
    const hours = d.getHours();
    return `${date}/${month}\n${hours}:${minutes}`;
  }
  const taskDate = formatDate();
  

  return (
    <>
      <div className="div1">
        
        <button onClick={() => {
          stop && setInp(true)
          task.length % 73 === 0
          ? setRows(rows + 1)
          : setRows(Math.round(1 + task.length / 60));
        }
        
        } className="btn1">
          ADD a new task
        </button>
        {inp && (
          <>
         
            <textarea
              type="text"
              placeholder="Enter a new task"
              onChange={(e) => {
                setTask(e.target.value);
                task.length % 73 === 0
                  ? setRows(rows + 1)
                  : setRows(Math.round(1 + task.length / 60));
              }}
              onFocus={() => setClas("inp2")}
              onBlur={(e) => { if(e.target.value.search(/\w/gi) !== -1){
                setClas("inp1");
                setResult([...result, task]);
                setTask("");
                setInp(false);
                setCom(true);
               setDat([...dat, taskDate]);
               setRows(1);
              }}}
              rows={rows}
              onKeyDown={(e) => {if (e.target.value.search(/\w/gi)!== -1){
                if (e.key === "Enter" && !e.shiftKey) {
                  setClas("inp1");
                  setResult([...result, task]);
                  setTask("");
                  setInp(false);
                  setCom(true)
                  setDat([...dat, taskDate]);
                  setRows(1);
                }
              }
              }}
              value={task}
              className={clas}
            ></textarea>
          </>
        )}
        {com&&<Result task={result} arre={stopfunc} dat={dat} />}
      </div>
    </>
  );
}
export default TaskRead;
