import { useState } from "react";

function TodoForm(props) {
  const { onSubmit } = props;
  const [input, setInput] = useState('');

  const handleSubmitform = event=>{
    event.preventDefault();
    onSubmit(input);
    setInput('');
  }



  return (<form onSubmit={ handleSubmitform}>
    <div className="input-group">
      <input type="text" className="form-control" value={input} onChange={e => setInput(e.target.value)} />
      <button className="btn btn-primary">
        <i className="fa-solid fa-check" />
      </button>
      <button className="btn btn-outline-secondary">
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
    {/* <small className="text-danger">Title is required.</small> */}
  </form>)
}

export default TodoForm;