
import SearchText from "./SearchText";
import SearchStatus from "./SearchStatus";
import PageLimit from "./PageLimit";
import Sort from "./Sort";
import TodoList from "./TodoList";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

function TodoContainer(props) {
    const { searchTodos } = props;
    const [sort, setSort] = useState(true);
    const [value, setValue] = useState('');
    const [isCompelete, setIsCompelete] = useState('');
    const onClear = () => setValue('');

    
    useEffect(() => {
        const id = setTimeout(() => {
            searchTodos(value, isCompelete, sort); 
        }, 1000);
        return  () => clearTimeout(id);
    },[value,isCompelete,sort]);

    const isSort = (value) => { value === "Title: A-Z" ? setSort(true) : setSort(false) };
    const checkComplete = (e) => {
        switch (e) {
            case "completed": setIsCompelete(true); break;
            case "pending": setIsCompelete(false); break;
            default: setIsCompelete(''); break;
        }
    };
    const onChange = (event) => setValue(event.target.value);

    return (
        <>
            <div className="my-2 d-flex gap-3">
                <SearchText onChange={onChange} value={value} onClear={onClear}  />
                <SearchStatus searchTodos={props.searchTodos} checkComplete={checkComplete} isSort={isSort} />
            </div>
            <div className="my-2 d-flex justify-content-between">
                <PageLimit />
                <Sort isSort={isSort} />
            </div>
            <TodoList todos={props.todos} fetchTodo={props.fetchTodo} />
            <div className="my-2 d-flex justify-content-between align-item-center">
                <small className="text-muted ">Showing 6 to 10 of 12 entries</small>
                <Pagination />

            </div>


        </>
    )
}

export default TodoContainer