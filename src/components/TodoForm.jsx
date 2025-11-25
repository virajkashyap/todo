import { useState } from "react";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import TodoList from "./Todolist";

function FormTodo() {
  const [todo, setTodo] = useState([]);

  const todoSubmit = (event) => {
    event.preventDefault();
    let val = event.target.todoName.value;
    console.log(`Todo Added: ${todo}====${val}`);

    if (val === "") {
      alert("Please Enter Todo");
      return;
    }
    if (todo.includes(val)) {
      alert("Todo Already Exists");
      return;
    }

    let finalTodo = [...todo, val];

    setTodo(finalTodo);
  };
  const listTodo = todo.map((item, index) => {
    return <TodoList item={item} key={index} />;
  });

  return (
    <div className="form-container">
      <form className="form-todo" onSubmit={todoSubmit}>
        <div className="text-start">
          <lebel className="fs-6 fw-bold">Enter Your Todo</lebel>
          <input
            className="d-text-center mx-3"
            name="todoName"
            type="text"
            placeholder="Enter Todo"
          />
          <Button variant="primary" type="submit" className="mx-3 my-0">
            Submit
          </Button>
        </div>
      </form>

      {listTodo}
    </div>
  );
}

export default FormTodo;
