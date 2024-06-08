import logo from './logo.svg';
import './App.css';
import ToDoApp from './todoapp';

function App() {
  const weather = {
    currentCity: "Cleveland",
    description: "Sunny",
    temperature: 76
  }

const todoList = [
    "learn React",
    "eat",
    "sleep",
    "practice React",
    "watch React Pluralsight videos",
    "practice JavaScript",
  ]

  return (
   <ToDoApp name={'Deepthi D R'} weather={weather}></ToDoApp>
  );
}

export default App;
