//action creators
export const addToDoAction = (data) => {
    return {
        type: 'todoList/addToDo',
        payload: data,
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text,
    }
}
export const statusFilterChange = (data) => {
    return {
        type: 'filters/statusFilterChange',
        payload: data,
    }
}

export const priorityFilterChange = (priority) => {
    return {
        type: 'filters/priorityFilterChange',
        payload: priority,
    }
}

export const completedFilterChange = (todoId) => {
    return {
        type: 'filters/completedFilterChange',
        payload: todoId,
    }
}