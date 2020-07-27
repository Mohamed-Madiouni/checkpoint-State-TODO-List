import React, { useState, useEffect } from "react";

function Result({ task, arre, dat }) {
  const [edit, setEdit] = useState(null);
  const [disp, setDisp] = useState(null);
  const [remov, setRemov] = useState([]);
  const [cont, SetCont] = useState([]);
  const [val, setVal] = useState(null);
  const [clasbtn, setClasbtn] = useState(null);
  const [clasdiv, setClasdiv] = useState(null);
  const [rows, setRows] = useState(1);

  useEffect(() => {
    SetCont(task);
  }, [task]);

  return (
    <>
      {task.map((e, index) => (
        <>
          {remov.indexOf(index) === -1 && (
            <div
              className="div5"
              onMouseEnter={() => setClasbtn(index)}
              onMouseLeave={() => setClasbtn(null)}
            >
              <div className="div6">
                <p>{dat[index]}</p>
              </div>
              <div
                key={index}
                className="div2"
                style={{
                  flexDirection: clasdiv === index && "column-reverse",
                }}
              >
                {index !== disp && (
                  <>
                    <div>{cont[index] || e}</div>
                    <button
                      title="Edit task"
                      className="btn2"
                      style={{
                        opacity: clasbtn === index && "1",
                      }}
                      onClick={() => {
                        setEdit(index);
                        setDisp(index);
                        setVal(task[index]);
                        setClasdiv(index);
                        arre(0);
                      }}
                    >
                      <i className="fas fa-marker"></i>
                    </button>
                  </>
                )}
                {index === edit && (
                  <>
                    <textarea
                      type="text"
                      onBlur={(a) => cont.splice(index, 1, a.target.value)}
                      onChange={(a) => {
                        setVal(a.target.value);
                        val.length % 78 === 0 ? setRows(rows + 1) : setRows(Math.round(1 + val.length / 78));
                      }}
                      value={val}
                      className="textedit"
                      rows={rows}
                    ></textarea>
                    <div className="div4">
                      <button
                        className="btn3"
                        title="Save"
                        onClick={(e) => {
                          setDisp(null);
                          setEdit(null);
                          setClasdiv(null);
                          arre(1);
                        }}
                      >
                        <i className="fas fa-check"></i>
                      </button>
                      <button
                        className="btn3"
                        title="Delete"
                        onClick={() => {
                          remov.indexOf(index) === -1 &&
                            setRemov([...remov, index]);
                          arre(1);
                        }}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </>
      ))}
    </>
  );
}
export default Result;
