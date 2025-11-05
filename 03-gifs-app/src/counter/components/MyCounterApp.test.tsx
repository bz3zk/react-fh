import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from '@testing-library/react';

import { MyCounterApp } from "./MyCounterApp";

describe('MyCounterApp', () => {
    test('should render the component', () => {
        render(<MyCounterApp />);

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(`Counter : 1`);
        expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
    });

    test('should increase the counter', () => {
        render(<MyCounterApp />);

        const labelH1 = screen.getByRole('heading', { level: 1 });
        const button = screen.getByRole('button', { name: '+1' });

        fireEvent.click(button);

        expect(labelH1.innerHTML).toContain('Counter : 2');
    });


    test('should decrease the counter', () => {
        render(<MyCounterApp />);

        const labelH1 = screen.getByRole('heading', { level: 1 });
        const button = screen.getByRole('button', { name: '-1' });

        fireEvent.click(button);

        expect(labelH1.innerHTML).toContain('Counter : 0');
    });
});
