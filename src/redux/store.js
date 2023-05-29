//redux-core

// import { createStore } from 'redux'
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composedEnhancers);

// export default store;

//redux-toolkit
import { configureStore } from '@reduxjs/toolkit';
import FiltersSlice from '../components/Filters/filtersSlice';
import TodoSlice from '../components/TodoList/todoSlice';

const store = configureStore({
    reducer: {
        filters: FiltersSlice.reducer,
        toToList: TodoSlice.reducer,
    }
})
export default store;