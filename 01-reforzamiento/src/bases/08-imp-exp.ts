// // import heroes from './data/heroes.data';
// // import { heroes as arrayOfHeroes,type Hero } from './data/heroes.data';

// // const getHeroById = (id:number):Hero|undefined => {
    
// //     const hero = arrayOfHeroes.find((hero) => {return hero.id === id});

// //     // if (!hero){
// //     //     throw new Error(`${id} does not exist.`);
// //     // }

// //     return hero;
// // };

// // console.log(getHeroById(3));

import { heroes as arrayOfHeroes, type Hero, type Owner } from "./data/heroes.data";

export const getHeroByOwner = (owner:Owner): Hero[] => {
    const heroes = arrayOfHeroes.filter((heroes) => {return heroes.owner === owner});

    return heroes;
};

// // console.log(getHeroByOwner('DC'));