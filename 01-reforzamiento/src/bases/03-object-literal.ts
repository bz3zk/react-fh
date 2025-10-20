interface Person {
    firstName: string;
    lastName: string;
    age: number;
    
    address: Address;
    // address: {
    //     postalCode: number;
    //     city: string;
    // };
};

interface Address {
    postalCode: number;
    city: string;
}

const person1: Person = {
    firstName: 'David',
    lastName: 'Torres',
    age: 30,
    address: {
        postalCode: 98507,
        city: 'Zacatecas',
    },
};


// const person2 = structuredClone(person);

// person2.firstName = 'Martha';
// person2.lastName = 'Vega';
// person2.age = 32;
// person2.address = {postalCode: 98000, city: 'Zacatecas'}

// console.log(person, person2);

console.log(person1);