import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from '@testing-library/react';
import { PreviousSearches } from "./PreviousSearches";

describe('PreviousSearches', () => {
    test('should render with default values ', () => {
        const onLabelClicked = vi.fn();
        render(<PreviousSearches searches={[]} onLabelClicked={onLabelClicked} />);

        const h3 = screen.getByRole('heading', { level: 3 });

        expect(h3).toBeDefined();
        expect(h3.innerHTML).toBe('Busquedas Previas');
    });

    test('should render a list of 3 previous searches', () => {
        const onLabelClicked = vi.fn();
        const previousTerms = ['goku', 'saitama', 'elden ring', 'dark souls'];
        render(<PreviousSearches searches={previousTerms} onLabelClicked={onLabelClicked} />)

        const ul = screen.getByRole('list');

        expect(ul.children.length).toBe(previousTerms.length);
    });

    test('should call onLabelClicked using the firs on the list', () => {
        const onLabelClicked = vi.fn();
        const previousTerms = ['goku', 'saitama', 'elden ring', 'dark souls'];
        render(<PreviousSearches searches={previousTerms} onLabelClicked={onLabelClicked} />);

        const li = screen.getByText(previousTerms[0]);
        fireEvent.click(li);

        expect(onLabelClicked).toHaveBeenCalled();
        expect(onLabelClicked).toHaveBeenCalledWith(previousTerms[0]);
    });
});