import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi, vitest } from 'vitest';
import { FirstStepsApp } from './FirstStepsApp';
// import { ItemCounter } from './shopping-cart/ItemCounter';

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: () => { <div data-testid="ItemCounter" /> }
// }));

const mockItemCounter = vi.fn((props: unknown) => {
    return <div data-testid='ItemProduct' />
});

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe('FirstStepsApp', () => {
    // ! Cleans every mock after each test
    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp />);

        expect(container).toMatchSnapshot();
    });

    test('should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />);

        const itemCounters = screen.getAllByTestId('ItemProduct');
        expect(itemCounters.length).toBe(3);
        // screen.debug();
    });

    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />);

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            productName: 'Nintendo Switch',
            productQuantity: 2
        });

        // expect(mockItemCounter).toHaveBeenCalledWith({
        //     productName: 'PlayStation',
        //     productQuantity: 1
        // });
    });
});