import React, { useState, useEffect } from "react";

const Theme = ({onTheme}) => {
  const themes = ["normal", "dark", "sea", "forest"];
  const [theme, setTheme] = useState("normal");

  const handleTheme = (data)=>{
    setTheme(data);
    onTheme(data);
  }
  return (
    <div className="theme-buttons">
  {themes.map((t) => {
    return (
      <button
        key={t}
        onClick={() => handleTheme(t)}
      >
        {t}
      </button>
    );
  })}
</div>
  );
};

export default Theme;
