import { describe, expect, test, vi } from "vitest";
import { render, screen } from '@testing-library/react'

import { SearchBar } from "./SearchBar";

describe('SearchBar', () => {
    test('should render search bar correctly', () => {
        const { container } = render(<SearchBar onQuery={() => { }} />)

        expect(container).toMatchSnapshot();
        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
    });

    test('should call onQuery with the correct value after 700ms', () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);
    });
});
