import logo from 'public./vite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import SideBar from './components/Sidebar/Sidebar';
import TopBar from './components/TopBar/TopBar';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <SideBar />
      </header>
    </div>
  );
};

export default App;
