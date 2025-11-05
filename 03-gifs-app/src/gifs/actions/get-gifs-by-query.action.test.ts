import { beforeEach, describe, expect, test, vi } from "vitest";
import AxiosMockAdapter from 'axios-mock-adapter';

import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from './../../../tests/mocks/giphy.response.data';

describe('getGifsByQuery', () => {
    let mock = new AxiosMockAdapter(giphyApi);
    // let mockmock.restore();<

    beforeEach(() => {
        // mock.reset();
        mock = new AxiosMockAdapter(giphyApi);
    });

    // // test('should return a list of gifs', async () => {
    // //     const gifs = await getGifsByQuery('saitama');
    // //     const [gif1] = gifs;

    // //     expect(gif1).toStrictEqual({
    // //         id: expect.any(String),
    // //         title: expect.any(String),
    // //         url: expect.any(String),
    // //         width: expect.any(Number),
    // //         height: expect.any(Number),
    // //     });
    // // });

    test('should return a list of 10 gifs, with certain types', async () => {
        mock.onGet('/search').reply(200, giphySearchResponseMock);

        const gifs = await getGifsByQuery('saitama');

        expect(gifs.length).toBe(10);

        gifs.forEach(gif => {
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');
        });
    });

    test('should return an empty list of gifs if query is empty', async () => {
        mock.restore();

        const gifs = await getGifsByQuery('');
        expect(gifs.length).toBe(0);
    });

    test('should handle error when the API return an error', async () => {
        const consoleErrorSpy = vi.spyOn(console, 'error')
            .mockImplementation(() => {
                console.log('400 error');
            });

        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad Request',
            }
        });

        const gifs = await getGifsByQuery('saitama');

        expect(gifs.length).toBe(0);
        expect(consoleErrorSpy).toBeCalled();
        expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything());
    });
});