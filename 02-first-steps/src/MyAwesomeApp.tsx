import type { CSSProperties } from "react";

const firstName = 'David';
const lastName = 'Correa';

const favoriteGames = ['Elden Ring', 'Dota', 'Dark Souls'];

const isActive = false;
const address = {
    zipCode: 12345,
    city: "Mexico"
};

const isActiveStyle: CSSProperties = {
    borderRadius: 5,
    backgroundColor: isActive ? 'lightgreen' : 'lightgoldenrodyellow',
    color: isActive ? 'blueviolet' : 'black',
};

export const MyAwesomeApp = () => {
    return (
        <>
            <h1>{firstName}</h1>
            <h2>{lastName}</h2>
            <p>{favoriteGames.join(' | ')}</p>

            <h1 style={isActiveStyle}>{isActive ? 'Activo' : 'Inactivo'}</h1>
            <p>{JSON.stringify(address)}</p>
        </>
    )
};

