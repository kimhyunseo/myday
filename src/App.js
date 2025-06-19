import { useEffect, useState } from "react";
import "./app.scss";
import LoginHome from "./components/LoginHome";
import Time from "./components/Time";
import MainPage from "./components/MainPage";
import Weather from "./components/Weather";
import Quote from "./components/Quote";
import Theme from "./components/Theme";

// import bgImg from './images/img-02.jpg';

const App = () => {
  const USER_KEY = "user_name";
  const THEME_KEY = "theme_name";
  const [theme, setTheme] = useState("normal");
  const [user, setUser] = useState("");
  //처음 시작하자마자 user_name을 읽어와야 함
  useEffect(() => {
    const saved = localStorage.getItem(USER_KEY);
    if (saved) {
      setUser(saved);
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  const handleLogin = (data) => {
    localStorage.setItem(USER_KEY, data);
    setUser(data);
  };

  const handleLogout = () => {
    localStorage.removeItem(USER_KEY);
    setUser("");
  };

  const handleTheme = (data) => {
    localStorage.setItem(THEME_KEY, data);
    setTheme(data);
  };

  return (
    <div className="app">
      <Weather />
      <Quote />
      <Theme onTheme={handleTheme} />
      <Time />

      {user ? (
        <MainPage user={user} offLogin={handleLogout} />
      ) : (
        <LoginHome onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
