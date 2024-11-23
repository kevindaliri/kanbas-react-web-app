import React, { useState } from "react";

export default function WorkingWithArrays() {
  const API = "http://localhost:4000/lab5/todos";
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr/>

      <h4>Retrieving an Item from an Array by ID</h4>
      <a 
        id="wd-retrieve-todo-by-id" 
        className="btn btn-primary float-end" 
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <input 
        id="wd-todo-id" 
        defaultValue={todo.id} 
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} 
      />
      <hr/>

      <h4>Filtering Array Items</h4>
      <a 
        id="wd-retrieve-completed-todos" 
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr/>

      <h4>Creating new Items in an Array</h4>
      <a 
        id="wd-create-todo" 
        className="btn btn-primary"
        href={`${API}/create`}
      >
        Create Todo
      </a>
      <hr/>

      <h4>Deleting from an Array</h4>
      <a 
        id="wd-delete-todo" 
        className="btn btn-primary float-end" 
        href={`${API}/${todo.id}/delete`}
      >
        Delete Todo with ID = {todo.id}
      </a>
      <input 
        defaultValue={todo.id} 
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr/>

      <h4>Updating an Item in an Array</h4>
      <a 
        href={`${API}/${todo.id}/title/${todo.title}`} 
        className="btn btn-primary float-end"
      >
        Update Todo Title
      </a>
      <input 
        defaultValue={todo.id} 
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input 
        defaultValue={todo.title} 
        className="form-control w-50 float-start"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br/><br/><hr/>

      <h4>Update Todo Status</h4>
      <a 
        href={`${API}/${todo.id}/completed/${!todo.completed}`}
        className="btn btn-primary float-end"
      >
        Mark Todo {todo.completed ? "Incomplete" : "Complete"}
      </a>
      <input 
        defaultValue={todo.id} 
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <div className="float-start mt-2">
        <label>
          <input 
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => setTodo({ 
              ...todo, 
              completed: e.target.checked 
            })}
          /> Completed
        </label>
      </div>
      <br/><br/><hr/>

      <h4>Update Todo Description</h4>
      <a 
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary float-end"
      >
        Update Description
      </a>
      <input 
        defaultValue={todo.id} 
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input 
        defaultValue={todo.description} 
        className="form-control w-50 float-start"
        onChange={(e) => setTodo({ 
          ...todo, 
          description: e.target.value 
        })}
      />
      <br/><br/><hr/>
    </div>
  );
}