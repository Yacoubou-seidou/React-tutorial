import './App.css';
import TodosLogic from './components/TodoLogic';

function App() {
  return (
    <div className="wrapper">
      <div className="todos">
        <TodosLogic />
      </div>
    </div>
  );
}

export default App;
