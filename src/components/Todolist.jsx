const TodoList = ({ item }) => {
  return (
    <div className="todo-list">
      <h3>{item ? item : "no todo added yet"}</h3>
      <div>
        <button className="btn btn-warning">Edit</button>
        <button className="btn btn-danger"> Delete</button>
      </div>
    </div>
  );
};
export default TodoList;
