import { fireEvent, render, screen } from '@testing-library/react';
import { test, describe, expect } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
    // ! Test 1
    test('should render with default values', () => {
        const testName = 'test item';

        render(<ItemCounter productName={testName} />);

        // expect(screen.getByText(testName)).toBeDefined();
        expect(screen.getByText(testName)).not.toBeNull();
    });

    // ! Test 2
    test('should render with custom quantity', () => {
        const testName = 'test item';
        const testQuantity = 12;

        render(<ItemCounter productName={testName} productQuantity={testQuantity} />);

        expect(screen.getByText(testQuantity)).toBeDefined();
    });

    // ! Test 3
    test('should increase count when +1 button is pressed', () => {
        render(<ItemCounter productName='item test' productQuantity={1} />);

        const [buttonAdd] = screen.getAllByRole('button');

        fireEvent.click(buttonAdd);
        expect(screen.getByText('2')).toBeDefined();
    });

    // ! Test 4
    test('should decrease count when -1 button is pressed', () => {
        const quantity = 5;
        render(<ItemCounter productName='item test' productQuantity={quantity} />);

        const [, buttonSustract] = screen.getAllByRole('button');

        fireEvent.click(buttonSustract);
        // expect(screen.getByTestId('4')).toBeDefined();
        expect(screen.getByTestId('item-count').innerHTML).toBe((quantity - 1).toString());
    });

    // ! Test 5
    test('should not decrease count when -1 button is pressed and quantity = 1', () => {
        const quantity = 1;
        render(<ItemCounter productName='item test' productQuantity={quantity} />);

        // screen.debug();
        const [, buttonSustract] = screen.getAllByRole('button');

        fireEvent.click(buttonSustract);
        // expect(screen.getByText('0')).toBeDefined();
        expect(screen.getByTestId('item-count').innerHTML).toBe(quantity.toString());
    });

    // ! Test 6
    test('text should change to red when count = 0', () => {
        const testQuantity = 0;
        const testName = 'test name'
        render(<ItemCounter productName={testName} productQuantity={testQuantity} />);

        const itemText = screen.getByText(testName);
        // expect(itemText.style)
        expect(itemText.style.color).toBe('red');
    });

    // ! Test 7
    test('text should change to black when count > 0', () => {
        const testQuantity = 6;
        const testName = 'test name'
        render(<ItemCounter productName={testName} productQuantity={testQuantity} />);

        const itemText = screen.getByText(testName);
        // expect(itemText.style)
        expect(itemText.style.color).toBe('black');
    });
});