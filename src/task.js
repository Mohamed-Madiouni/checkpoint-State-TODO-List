import React, { useState } from "react";
import Result from "./result";

function TaskRead() {
  const [task, setTask] = useState('');
  const [result, setResult] = useState([]);
  const [inp, setInp] = useState("");
  const [clas, setClas] = useState("inp1");
  const [stop, setStop] = useState(1);
  const [dat, setDat] = useState([]);
  const [rows, setRows] = useState(1)
  const stopfunc = (x) => setStop(x);

  function formatDate() {
    let d = new Date();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    const minutes = d.getMinutes();
    const hours = d.getHours() - 1;
    return `${date}/${month}\n${hours}:${minutes}`;
  }
  const taskDate = formatDate();

  return (
    <>
      <div className="div1">
        <button onClick={() => stop && setInp(true)} className="btn1">
          ADD a new task
        </button>
        {inp && (
          <>
            <textarea
              type="text"
              placeholder="Enter a new task"
              onChange={(e) => {
                setTask(e.target.value)
                task.length % 73 === 0 ? setRows(rows + 1) : setRows(Math.round( 1+(task.length / 60)))
              }}
              onFocus={() => setClas("inp2")}
              onBlur={(e) => {
                setClas("inp1");
                setResult([...result, task]);
                setTask("");
                setInp(false);
                e.target.value!==""&&setDat([...dat, taskDate]);
              }}
              rows={rows}
              onKeyDown={(e) => {
                if (e.key==="Enter"&&!e.shiftKey) {
                  setClas("inp1");
                  setResult([...result, task]);
                  setTask("");
                  setInp(false);
                  e.target.value!==""&&setDat([...dat, taskDate]);
                }
              }}
              value={task}
              className={clas}
            ></textarea>
          </>
        )}
        <Result task={result} arre={stopfunc} dat={dat} />
      </div>
    </>
  );
}
export default TaskRead;
