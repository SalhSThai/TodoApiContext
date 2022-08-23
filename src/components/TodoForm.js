import { useState } from "react";
import axios from "axios";

function TodoForm(props) {
  const { fetchTodo, mode,item,setEdit } = props;
  const [title, setTitle] = useState('')

  const onSubmit = async e => {
    e.preventDefault();
    if (!mode) {
      try {
        const res = await axios.post("http://localhost:8080/todos", { title, completed: false });
        console.log(res.data);
        fetchTodo();
        setTitle('');
      } catch (err) { console.log(err); }
    }
    else {
      try {
        const res = await axios.put(`http://localhost:8080/todos/${item.id}` ,{ title, completed: item.completed });
        console.log(res.data);
        fetchTodo();
        setTitle('');
        setEdit(false);
      } catch (err) { console.log(err); }

    }
  }

  const onReset = function (e) {
    console.log(e.target);
    setTitle('');
    setEdit(false);
  }

  return (<form onSubmit={onSubmit}>
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={title}
        onChange={e => setTitle(e.target.value)} />
      <button className="btn btn-primary">
        <i className="fa-solid fa-check" />
      </button>
      <button type="button"
        className="btn btn-outline-secondary"
        onClick={onReset}>
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
    {/* <small className="text-danger">Title is required.</small> */}
  </form>)
}

export default TodoForm;