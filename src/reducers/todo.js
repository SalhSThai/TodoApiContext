import { useState } from "react";
import { CREATE_TODO, DELETE_TODO, LOAD_TODO } from "../actions/todoAction";
import TodoItem from "../components/TodoItem";

const initialTodoState = {
    todos: [],
    searchText: '',
    searchStatus: null,
    sort: '',
    pageLimit: 10,
    currentPage: 1,
    renderedTodos: []
};


function todoReducer(state, action) {

    const { type, payload } = action;
    const { todos, searchText, searchStatus, sort, pageLimit, currentPage, renderedTodos } = state;
    switch (type) {
        case LOAD_TODO: {
            const todos = payload.todos;
            return { ...state, todos: todos };
        }
        case DELETE_TODO: {
            const todo = todos.filter((item) => item.id != payload.id)
            return {...state,todos:todo}
        }
        case CREATE_TODO: {
            return {...state,todos:[payload.todo,...state.todos]}
        }

        default:
            return state;
    }
}
export default todoReducer;
export { initialTodoState };
