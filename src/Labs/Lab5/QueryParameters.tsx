import { useState } from "react";

function QueryParameters() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input
        id="wd-query-parameter-a"
        className="form-control mb-2"
        defaultValue={a}
        type="number"
        onChange={(e) => setA(parseInt(e.target.value))}
      />
      <input
        id="wd-query-parameter-b"
        className="form-control mb-2"
        defaultValue={b}
        type="number"
        onChange={(e) => setB(parseInt(e.target.value))}
      />
      <div className="list-group">
        <a
          id="wd-query-parameter-add"
          className="list-group-item"
          href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
        >
          Add {a} + {b}
        </a>
        <a
          id="wd-query-parameter-subtract"
          className="list-group-item"
          href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
        >
          Subtract {a} - {b}
        </a>
        {/* New multiply link */}
        <a
          id="wd-query-parameter-multiply"
          className="list-group-item"
          href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
        >
          Multiply {a} * {b}
        </a>
        {/* New divide link */}
        <a
          id="wd-query-parameter-divide"
          className="list-group-item"
          href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
        >
          Divide {a} / {b}
        </a>
      </div>
      <hr />
    </div>
  );
}

export default QueryParameters;