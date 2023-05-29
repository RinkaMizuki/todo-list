// export const toDoListSelector = (state) => {
//     const todosRemaining = state.toToList.filter((todo) => {
//         return todo.name.includes(searchTextSelector(state))
//     });

//     return todosRemaining;
// };
//use reselect of redux core (install package reselect)
import { createSelector } from 'reselect';

export const searchTextSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const prioritySelector = (state) => state.filters.priority;
export const toDoListSelector = (state) => state.toToList;

export const todosRemaining = createSelector(searchTextSelector, statusSelector, prioritySelector, toDoListSelector, (searchText, statusSelector, prioritySelector, toDoList) => {
    return toDoList.filter((todo) => {
        const conditionSearchText = todo.name.includes(searchText);
        const conditionStatus = statusSelector === 'Completed' ? todo.completed : !todo.completed;
        const conditionPriority = prioritySelector.includes(todo.priority);
        if (statusSelector === 'All') {
            return prioritySelector.length > 0 ? conditionSearchText && conditionPriority : conditionSearchText;
        }
        return prioritySelector.length > 0 ? conditionPriority && conditionSearchText && conditionStatus : conditionSearchText && conditionStatus;
    })
})