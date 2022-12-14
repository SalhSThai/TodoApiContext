import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        <TodoForm />
      </div>
      <TodoContainer />
    </div>
  );
}

export default App;