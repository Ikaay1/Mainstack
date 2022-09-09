import {fireEvent, render, screen} from '@testing-library/react';

import Sidebar from './Sidebar';

describe('greetings section', () => {
    const setShow = jest.fn();

    test('check if greetings is displayed', () => {
        const {container} = render(<Sidebar setShow={setShow} />);
        expect(container).toBeDefined();
    });
    test('check if sidebar links are displayed', () => {
        render(<Sidebar setShow={setShow} />);
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });
});
