import reducer from "../reducer";

describe('List reducer', () => {
    it('should store the todos', () => {
        const action = { type: 'FETCH_TODOS'};
        const saveTodos = reducer(null, action);
        expect(saveTodos).toEqual({todos: ['todo1', 'todo2']});
    });
});