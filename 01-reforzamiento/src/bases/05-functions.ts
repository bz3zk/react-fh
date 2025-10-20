function greet(name: string):string{
    return `Hola ${name}`;
}

// const greet2 = (name:string):string => {
//     return `Hola ${name}`;
// }


const message = greet('David');
console.log(message);

interface User {
    uid: string;
    username: string;
}

function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'bz3zk',
    };
}

const user = getUser();
console.log(user);


// const getUser2 = () => {
//     return {
//         uid: 'CDE-456',
//         username: 'vegaive',
//     };
// }

//  Simplificacion de funcion de flecha

const getUser2 = ():User => ({uid: 'CDE-456', username: 'vegaive'});


const user2 = getUser2();
console.log(user2);

// Ejemplo de funcion de flecha

const myNumber: number[] = [1,2,3,4,5];

// myNumber.forEach(function (value) {console.log({value})}); // Funcion tradicional
myNumber.forEach((value) => {console.log({value})}); // Callback
// myNumber.forEach(console.log);