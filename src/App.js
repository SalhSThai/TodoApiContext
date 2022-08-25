import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer";
import { createContext } from "react";
import TodoContextProvider from "./contexts/TodoContext";


const ContextObject = createContext();

function App() {
  return (
    <TodoContextProvider>
      <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
        <div className="my-4">
          <TodoForm />
        </div>
        <TodoContainer />
      </div>
    </TodoContextProvider>
  );
}
function test() { }
export default App;
export { ContextObject }
App.test = test();