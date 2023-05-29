// const initState = {
//     search: '',
//     status: 'All',
//     priority: [],
// };

// const FiltersSlice = (state = initState, action) => {
//     switch (action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload,
//             }
//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload,
//             }
//         case 'filters/priorityFilterChange':
//             return {
//                 ...state,
//                 priority: action.payload,
//             }
//         default:
//             return state;
//     }
// }


//redux-toolkit
import { createSlice } from '@reduxjs/toolkit';

const FiltersSlice = createSlice({
    name: 'filters', // => field : filters/searchFilterChange
    initialState: {
        search: '',
        status: 'All',
        priority: [],
    },
    reducers: {
        searchFilterChange(state, action) {
            console.log(state);
            state.search = action.payload;
        },
        statusFilterChange(state, action) {
            state.status = action.payload;
        },
        priorityFilterChange(state, action) {
            state.priority = action.payload;
        },
    }
});
export default FiltersSlice;