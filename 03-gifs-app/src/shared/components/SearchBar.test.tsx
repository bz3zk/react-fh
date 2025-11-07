import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { SearchBar } from "./SearchBar";

describe('SearchBar', () => {
    test('should render search bar correctly', () => {
        const { container } = render(<SearchBar onQuery={() => { }} />);

        expect(container).toMatchSnapshot();
        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
    });

    test('should call onQuery with the correct value after 700ms', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });

        // await new Promise((resolve) => setTimeout(resolve, 701));

        await waitFor(() => {
            expect(onQuery).toHaveBeenCalled();
            expect(onQuery).toBeCalledWith('test');
        });
    });

    test('should call only once with the last value (debounce)', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 't' } });
        fireEvent.change(input, { target: { value: 'te' } });

        await waitFor(() => {
            expect(onQuery).toHaveBeenCalled();
            expect(onQuery).toBeCalledWith('te');
        });
    });

    test('should call onQuery when button is clicked with the input value', () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });
        const button = screen.getByRole('button');
        fireEvent.click(button);
        // console.log(button);

        expect(onQuery).toHaveBeenCalled();
        expect(onQuery).toBeCalledWith('test');
    });
});
