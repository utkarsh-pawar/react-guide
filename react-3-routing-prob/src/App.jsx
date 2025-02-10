import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [todos, setTodos] = useState([]);
  let [title, setTitle] = useState([]);
  let [desc, setDesc] = useState([]);
  const createTaskOnLocal = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, { title: title, desc: desc }]);
    setTitle(() => "");
    setDesc(() => "");
  };
  return (
    <>
      <form action="">
        <h2>create a Task</h2>
        <div>
          <label>Enter the title of task</label>
          <input
            required
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="enter title here"
          />
        </div>
        <div>
          <label>description of task</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
            name=""
            id="desc"
            cols={5}
            rows={6}
          ></textarea>
        </div>
        <button
          disabled={!title || !desc}
          type="submit"
          onClick={createTaskOnLocal}
        >
          CreateTask
        </button>
      </form>
      <div>{JSON.stringify(todos)}</div>
    </>
  );
}

export default App;
