import { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import CalendarBox from "./CalendarBox";

const MainPage = ({ user, offLogin }) => {
  const TODOS_KEY = "todos";
  const [todos, setTodos] = useState([]);
  //처음에 localstorge에 저장된 todos 값이 있으면 읽어와서 걸정
  useEffect(() => {
    const saved = localStorage.getItem(TODOS_KEY); //문자열
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);
  //todos가 변경되면 localstorage에 저장
  useEffect(() => {
    const saved = JSON.stringify(todos); //객체를 문자열로...
    localStorage.setItem(TODOS_KEY, saved);
  }, [todos]);
  const addTodo = (text) => {
    /**
     * todo {id:현재 시간 Date.now(), text}
     */
    const newTodo = { id: Date.now(), todo: text, done: false };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id) => {
    const update = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(update);
  };
  const toggleTodo = (id) => {
    const update = todos.map((item) => {
      return item.id === id ? { ...item, done: !item.done } : item;
    });
    setTodos(update);
  };
  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "좋은 아침이에요.";
    } else if (hour < 18) {
      return "좋은 오후에요.";
    } else {
      return "좋은 저녁이에요.";
    }
  };
  return (
    <div className="mainpage">
      <div className="wrap">
        <h2>
          {user}님, {greeting()}
        </h2>
        <button onClick={offLogin}>로그아웃</button>
      </div>
      {/* 홍길동님, 반가워요 */}

      <div className="bottom-wrap">
        <div className="todoform">
          <ToDoForm onAdd={addTodo} />
          <ToDoList todos={todos} onDelete={deleteTodo} onTogle={toggleTodo} />
        </div>
        <div className="calendar-wrap">
          <CalendarBox />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
