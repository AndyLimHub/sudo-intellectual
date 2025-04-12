import React, { useEffect, useState } from 'react';
import TopBar from './components/TopBar';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <TopBar />
      <div className="flex">
        {/* Sidebar will go here */}
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-semibold">{message}</h1>
        </main>
      </div>
      {/* Footer will go here */}
    </div>
  );
};

export default App;
