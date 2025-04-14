import { createRoot } from 'react-dom/client';
import TopBar from './components/TopBar';
import { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/hello')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Response from Flask:', data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <TopBar />
      <p>{message}</p>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export default App;
