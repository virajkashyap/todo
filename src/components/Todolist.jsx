const TodoList = () => {
  return (
    <div className="todo-list">
      <table>
        <thead>
          <tr>
            <th>Todos</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sample Task</td>
            <td>
              <button>Done</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Sample Task 2</td>
            <td>
              <button>Done</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TodoList;
