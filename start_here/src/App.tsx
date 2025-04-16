import logo from 'public./vite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/vite.svg" alt="Vite logo" />

        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Card>
          <Card.Img src="https://picsum.photos/200/100" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              This is a simple card component using React Bootstrap.
            </Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item> Test 1</Breadcrumb.Item>
          <Breadcrumb.Item> Test 2</Breadcrumb.Item>
          <Breadcrumb.Item active> Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This is a button</Alert>
        <Button>Test Button</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          React.com
        </a>
      </header>
    </div>
  );
};

export default App;
