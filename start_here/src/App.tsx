import { createRoot } from 'react-dom/client';
import React from 'react';
import TopBar from './components/TopBar';

const App = () => {
  return (
    <div>
      <TopBar />
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export default App;
