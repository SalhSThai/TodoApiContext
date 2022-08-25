import { useContext, useState } from "react";
import { CREATE_TODO } from "../actions/todoAction";
import axios from "../config/axios";
import { TodoContext } from "../contexts/TodoContext";

function TodoForm(props) {
  const [title, setTitle] = useState('');
  const { onSubmit } = props;


  const heandleClickSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
    setTitle('');
  };
  const heandleClickCancle = (event) => { 
    setTitle('');
  };


  return (<form onSubmit={heandleClickSubmit}>
    <div className="input-group">
      <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
      <button className="btn btn-primary">
        <i className="fa-solid fa-check" />
      </button>
      <button type="button" className="btn btn-outline-secondary" onClick={heandleClickCancle}>
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
    {/* <small className="text-danger">Title is required.</small> */}
  </form>)
}

export default TodoForm;