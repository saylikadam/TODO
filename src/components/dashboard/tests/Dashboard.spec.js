import React from 'react';
import { render } from 'react-testing-library';
import Dashboard from '../Dashboard';

describe('<Home />', () => {
    let result;
    beforeEach(() => {
        result = render(<Dashboard/>);
    });

    it('should render Home page', () => {
        const { container } = result;
        expect(container).toMatchSnapshot();
    });


});