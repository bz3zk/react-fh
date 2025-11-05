import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
    const testTitle = 'test title';
    const testDescription = 'optional description for testing';

    test('should render the title correctly', () => {
        // ! Using render
        // const { container } = render(<CustomHeader title={testTitle} />);
        // expect(container.innerHTML).includes(testTitle);

        // ! Using screen
        // screen.debug();
        render(<CustomHeader title={testTitle} />);
        expect(screen.getByText(testTitle)).toBeDefined();
    });

    test('should render the description when provided', () => {
        // ! Using render
        // const { container } = render(<CustomHeader title={testTitle} description={testDescription} />);
        // expect(container.innerHTML).includes(testDescription);

        // ! Using screen
        render(<CustomHeader title={testTitle} description={testDescription} />);
        expect(screen.getAllByText(testDescription)).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML).toBe(testDescription);
    });

    test('should not render description when not provided', () => {
        // ! Using render
        const { container } = render(<CustomHeader title={testTitle} />);
        expect(container.innerHTML).not.includes('<p>');
    });
});