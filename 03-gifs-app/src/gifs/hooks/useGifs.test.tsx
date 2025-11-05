import { describe, expect, test, vi } from 'vitest';

import { useGifs } from './useGifs';
import { renderHook, act } from '@testing-library/react';
import * as gifActions from '../actions/get-gifs-by-query.action';

describe('useGifs', () => {
    test('should return default values and methods', () => {
        const { result } = renderHook(() => useGifs());

        expect(result.current.gifsFromQuery.length).toBe(0);
        expect(result.current.previousTerms.length).toBe(0);
        expect(result.current.handleSearch).toBeDefined();
        expect(result.current.handleTermClicked).toBeDefined();
    });

    test('should return a list of 10 gifs', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => await result.current.handleSearch('saitama'));
        expect(result.current.gifsFromQuery.length).toBe(10);
    });

    test('should return a list of 10 gifs when handleTermClicked is called', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => await result.current.handleTermClicked('saitama'));
        expect(result.current.gifsFromQuery.length).toBe(10);
    });

    test('should return a list of gifs from cache', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => await result.current.handleTermClicked('saitama'));

        vi.spyOn(gifActions, 'getGifsByQuery')
            .mockRejectedValue(new Error('This is a custom error msg.'));


        await act(async () => await result.current.handleTermClicked('saitama'));

        expect(result.current.gifsFromQuery.length).toBe(10);
    });

    test('should return no more than 7 previous terms', async () => {
        const { result } = renderHook(() => useGifs());

        vi.spyOn(gifActions, 'getGifsByQuery')
            .mockResolvedValue([]);

        await act(async () => await result.current.handleSearch('search1'));
        await act(async () => await result.current.handleSearch('search2'));
        await act(async () => await result.current.handleSearch('search3'));
        await act(async () => await result.current.handleSearch('search4'));
        await act(async () => await result.current.handleSearch('search5'));
        await act(async () => await result.current.handleSearch('search6'));
        await act(async () => await result.current.handleSearch('search7'));
        await act(async () => await result.current.handleSearch('search8'));
        await act(async () => await result.current.handleSearch('search9'));


        expect(result.current.previousTerms.length).toBe(7);
        expect(result.current.previousTerms).toStrictEqual(
            [
                'search9',
                'search8',
                'search7',
                'search6',
                'search5',
                'search4',
                'search3',
            ]
        );
    });
});
