import TodoSlice from "../components/TodoList/todoSlice";
import FiltersSplit from "../components/Filters/filtersSlice";

const rootReducer = (state = {}, action) => {
    return {
        filters: FiltersSplit(state.filters, action),
        toToList: TodoSlice(state.toToList, action),
    }
}
export default rootReducer;