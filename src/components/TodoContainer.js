
import SearchText from "./SearchText";
import SearchStatus from "./SearchStatus";
import PageLimit from "./PageLimit";
import Sort from "./Sort";
import TodoList from "./TodoList";
import Pagination from "./Pagination";

function TodoContainer(props) {

    return (
        <>
            <div className="my-2 d-flex gap-3">
                <SearchText />
                <SearchStatus />
                </div>
                <div className="my-2 d-flex justify-content-between">
                    <PageLimit />
                    <Sort />
                </div>
                <TodoList todos={props.todos} fetchTodo={props.fetchTodo}/>
            <div className="my-2 d-flex justify-content-between align-item-center">
                <small className="text-muted ">Showing 6 to 10 of 12 entries</small>
                <Pagination />

            </div>

            
        </>
    )
}

export default TodoContainer