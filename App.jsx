import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [background, setBackground] = useState(
    "linear-gradient(45deg, #ff6b6b, #f5f5f5)"
  );

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    setBackground(`radial-gradient(circle at ${x}px ${y}px, #ff6b6b, #f5f5f5)`);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="container" style={{ background }}>
      <h1>Welcome to My Dynamic Background Page</h1>
    </div>
  );
};

export default App;
<s></s>;
