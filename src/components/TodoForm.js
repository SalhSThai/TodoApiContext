import { useState } from "react";

function TodoForm(props) {
  const {  onSubmit ,initailValue} = props;
  const [title, setTitle] = useState(initailValue||'')

  const handleSubmitForm =  e => {
    e.preventDefault();
    onSubmit(title)
    setTitle('');
    }
  

    const handleClickCancle = function (e) {
      setTitle('');
      props.onCancle?.();
    }

  return (<form onSubmit={handleSubmitForm}>
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
        onClick={handleClickCancle}>
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
    {/* <small className="text-danger">Title is required.</small> */}
  </form>)
}

export default TodoForm;