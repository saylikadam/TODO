const todos = ['todo1', 'todo2'];

const todoReducer = (state = {}, action) => {
    if(action.type === 'FETCH_TODOS') {
        return {...state, todos};
    }
    return state;
};
export default todoReducer;