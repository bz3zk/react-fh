import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifsFromQuery, setGifsFromQuery] = useState<Gif[]>([]);

    const handleTermClicked = (term: string) => {
        console.log(term);
    };

    const handleSearch = async (query: string = '') => {
        const queryToLowerCase = query.trim().toLowerCase();

        if (query === '') return;
        if (previousTerms.includes(queryToLowerCase)) return;

        setPreviousTerms([query, ...previousTerms.slice(0, 6)]);

        const gifs = await getGifsByQuery(query);

        setGifsFromQuery(gifs);
    };

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Encuentra tus Gifs favoritos." />

            {/* Search */}
            <SearchBar placeholder="Buscar Gifs..." onQuery={handleSearch} />

            {/* Previous Searches */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

            {/* Gifs */}
            <GifList gifs={gifsFromQuery} />
        </>
    )
};