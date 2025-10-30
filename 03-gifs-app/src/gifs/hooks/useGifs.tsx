import type { Gif } from "../interfaces/gif.interface";

import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

// ! Other way of manage Cache
// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifsFromQuery, setGifsFromQuery] = useState<Gif[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({}); // cache object

    const handleTermClicked = async (term: string) => {

        if (gifsCache.current[term]) {
            setGifsFromQuery(gifsCache.current[term]);
            return;
        }

        const gifs = await getGifsByQuery(term);
        setGifsFromQuery(gifs);
    };

    const handleSearch = async (query: string = '') => {
        const queryToLowerCase = query.trim().toLowerCase();

        if (query === '') return;
        if (previousTerms.includes(queryToLowerCase)) return;

        setPreviousTerms([query, ...previousTerms.slice(0, 6)]);

        const gifs = await getGifsByQuery(query);
        setGifsFromQuery(gifs);

        gifsCache.current[query] = gifs;
    };

    return {
        // Values
        previousTerms,
        gifsFromQuery,
        // Methods
        handleSearch,
        handleTermClicked,
    }
}
