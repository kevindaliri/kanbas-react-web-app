import { useState } from "react";

function PathParameters() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <input
        id="wd-path-parameter-a"
        className="form-control mb-2"
        defaultValue={a}
        type="number"
        onChange={(e) => setA(parseInt(e.target.value))}
      />
      <input
        id="wd-path-parameter-b"
        className="form-control mb-2"
        defaultValue={b}
        type="number"
        onChange={(e) => setB(parseInt(e.target.value))}
      />
      <div className="list-group">
        <a
          id="wd-path-parameter-add"
          className="list-group-item"
          href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`}
        >
          Add {a} + {b}
        </a>
        <a
          id="wd-path-parameter-subtract"
          className="list-group-item"
          href={`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`}
        >
          Subtract {a} - {b}
        </a>
        {/* New multiply link */}
        <a
          id="wd-path-parameter-multiply"
          className="list-group-item"
          href={`${REMOTE_SERVER}/lab5/multiply/${a}/${b}`}
        >
          Multiply {a} * {b}
        </a>
        {/* New divide link */}
        <a
          id="wd-path-parameter-divide"
          className="list-group-item"
          href={`${REMOTE_SERVER}/lab5/divide/${a}/${b}`}
        >
          Divide {a} / {b}
        </a>
      </div>
      <hr />
    </div>
  );
}

export default PathParameters;