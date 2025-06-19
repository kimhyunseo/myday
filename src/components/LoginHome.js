import { useState } from "react";

const LoginHome = ({ onLogin }) => {
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = user.trim();
    if (trimmed) {
      onLogin(user); //부모에게 데이터 전송
      setUser("");
    }
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2>당신의 이름을 입력하세요</h2>
      <div className="wrap">
        <input
          type="text"
          placeholder="이름"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <button type="submit">입장하기</button>
      </div>
    </form>
  );
};

export default LoginHome;
