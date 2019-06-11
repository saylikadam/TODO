import {fetchTodos} from "../actions";

describe('List Actions', () => {
    describe('fetch todo list', () => {
        it('should create an action to fetch todos', () => {
            expect(fetchTodos()).toEqual({type: 'FETCH_TODOS'});
        });
    });
});