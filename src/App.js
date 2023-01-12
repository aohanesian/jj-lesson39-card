import logo from './logo.svg';
import './App.css';
import Card from "./components/Card/Card";

function App() {
  return (
      <Card>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Text>Text</Card.Text>
        </Card.Body>
      </Card>
  );
}

export default App;
