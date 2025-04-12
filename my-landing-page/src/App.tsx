import React, { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch message from Flask API
    fetch("http://127.0.0.1:5000/api")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
