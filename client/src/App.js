
import './App.css';
// components
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodos';

function App() {
  return (
    <>
        <div className="container">
            <InputTodo />
            <ListTodo />
        </div>


    </>
  );
}

export default App;
