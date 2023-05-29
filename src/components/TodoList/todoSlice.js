// const initState = [
//     { id: 1, name: 'Learn JS', completed: true, priority: 'High' },
//     { id: 2, name: 'Learn Java', completed: true, priority: 'Medium' },
//     { id: 3, name: 'Learn Redux', completed: false, priority: 'Low' },
// ];

// const TodoSlice = (state = initState, action) => {
//     switch (action.type) {
//         case 'todoList/addToDo':
//             return [...state, action.payload];
//         case 'filters/completedFilterChange':
//             return state.map((todo) =>
//                 todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//             );
//         default:
//             return state;
//     }
// }
// export default TodoSlice;

//redux-toolkit

import { createSlice } from '@reduxjs/toolkit';

const TodoSlice = createSlice({
    name: 'toToList',
    initialState: [
        { id: 1, name: 'Learn JS', completed: true, priority: 'High' },
        { id: 2, name: 'Learn Java', completed: true, priority: 'Medium' },
        { id: 3, name: 'Learn Redux', completed: false, priority: 'Low' },
    ],
    reducers: {
        addToDoAction(state, action) {
            state.push(action.payload);
            // return [...state, action.payload];
        },
        completedFilterChange(state, action) {
            const todoCompleted = state.find(todo => todo.id === action.payload)
            todoCompleted.completed = !todoCompleted.completed;
        }
    }
});

export default TodoSlice;