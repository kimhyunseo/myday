const ToDoList = ({ todos, onDelete, onTogle }) => {
  if (todos.length === 0) {
    return <p>할일이 없습니다</p>;
  }
  return (
    <ul className="todolist">
      {todos.map((item) => {
        return (
          <li key={item.id}>
            <input
              type="checkbox"
              onChange={() => {
                onTogle(item.id);
              }}
              checked={item.done}
            />
            <span
              style={{
                textDecoration: item.done ? "line-through" : "none",
                opacity: item.done ? 0.3 : 1
              }}
            >
              {item.todo}
            </span>
            <button
              onClick={() => {
                onDelete(item.id);
              }}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
