import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from '@testing-library/react';

import { MyCounterApp } from "./MyCounterApp";

const handleAddMock = vi.fn();
const handleSustractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock("../hooks/useCounter", () => ({
    useCounter: () => ({
        counter: 20,
        handleAdd: handleAddMock,
        handleSustract: handleSustractMock,
        handleReset: handleResetMock,
    }),
}));

describe('MyCounterApp', () => {
    test('should render the component', () => {
        render(<MyCounterApp />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(`Counter : 20`);
        expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
    });

    test('should call handleAdd if button is clicked', () => {
        render(<MyCounterApp />);

        const button = screen.getByRole('button', { name: '+1' });

        fireEvent.click(button);

        expect(handleAddMock).toHaveBeenCalled();
        expect(handleSustractMock).not.toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();
    });
});
