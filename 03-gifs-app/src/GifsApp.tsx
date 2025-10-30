import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
    const { gifsFromQuery, previousTerms, handleSearch, handleTermClicked } = useGifs();

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