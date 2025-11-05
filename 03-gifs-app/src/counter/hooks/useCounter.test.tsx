import { describe, expect, test } from "vitest";
import { renderHook, act } from '@testing-library/react';

import { useCounter } from "./useCounter";

describe('useCounter', () => {
    test('should initialize with default value = 1', () => {
        const initialValue = 1;
        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(initialValue);
    });

    test('should initialize with value = 35', () => {
        const initialValue = 35;
        const { result } = renderHook(() => useCounter(initialValue));

        expect(result.current.counter).toBe(initialValue);
    });

    test('should increase counter when handleAdd is called', () => {
        const { result } = renderHook(() => useCounter());

        act(() => result.current.handleAdd());

        expect(result.current.counter).toBe(2);
    });

    test('should decrease counter when handleSustract is called', () => {
        const initialValue = 24;
        const { result } = renderHook(() => useCounter(initialValue));

        act(() => result.current.handleSustract());

        expect(result.current.counter).toBe(initialValue - 1);
    });

    test('should reset counter when handlereset is called', () => {
        const initialValue = 24;
        const { result } = renderHook(() => useCounter(initialValue));

        act(() => result.current.handleAdd()); //? +1 to counter
        act(() => result.current.handleAdd()); //? +1 to counter
        act(() => result.current.handleAdd()); //? +1 to counter
        act(() => result.current.handleReset()); //! Reset to initialValue

        expect(result.current.counter).toBe(initialValue);
    });
});
