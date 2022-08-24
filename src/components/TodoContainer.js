
import SearchText from "./SearchText";
import SearchStatus from "./SearchStatus";
import PageLimit from "./PageLimit";
import Sort from "./Sort";
import TodoList from "./TodoList";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

function TodoContainer(props) {
    const { searchTodos, total,trigger } = props;
    const [sort, setSort] = useState('');
    const [value, setValue] = useState('');
    const [isCompelete, setIsCompelete] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState('5');
    const onClear = () => setValue('');


    useEffect(() => {
        const id = setTimeout(() => {
            searchTodos(value, isCompelete, sort, currentPage, limit);
        }, 1000);
        return () => clearTimeout(id);
    }, [value, isCompelete, sort, currentPage, limit]);
    useEffect(()=>{
        searchTodos('','','',1,5)
    },[trigger])

    const isSort = (value) => setSort(value);
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
                <SearchText onChange={onChange} value={value} onClear={onClear} />
                <SearchStatus searchTodos={props.searchTodos} checkComplete={checkComplete} isSort={isSort} />
            </div>
            <div className="my-2 d-flex justify-content-between">
                <PageLimit chageLimit={e => { setLimit(e); setCurrentPage(1) }} value={limit} />
                <Sort isSort={isSort} />
            </div>
            <TodoList todos={props.todos} fetchTodo={props.fetchTodo} />
            <div className="my-2 d-flex justify-content-between align-item-center">
                <small className="text-muted ">Showing {(currentPage - 1) * limit + 1} to {+currentPage === Math.ceil(total / limit) ? total : currentPage * limit}  of {total} entries</small>
                <Pagination changePage={e => setCurrentPage(e)} noPage={Math.ceil(total / limit)} currentPage={currentPage} />

            </div>


        </>
    )
}

export default TodoContainer