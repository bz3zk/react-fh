import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from '@testing-library/react';

describe('MyAwesomeApp', () => {
    test('should render firstName and lastName', () => {
        const { container } = render(<MyAwesomeApp />);
        // screen.debug();

        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toBe("David");

        const h2 = container.querySelector('h2');
        expect(h2?.innerHTML).toBe("Correa");
    });

    // // test('should render firstName and lastName - screen', () => {
    // //     render(<MyAwesomeApp />);
    // //     screen.debug();

    // //     const h1 = screen.getByRole('heading', { level: 1 });
    // // });

    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />);

        expect(container).toMatchSnapshot();
    });
});