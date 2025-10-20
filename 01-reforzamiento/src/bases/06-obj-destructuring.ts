const person = {
    firstName: 'David',
    lastName: 'Torres',
    age: 30
};

// const {firstName, lastName, age} = person;

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    rank?: number;
}

const useContext = ({firstName, lastName, age, rank}: Person) =>{
    return {
        user: {
            firstName,
            lastName
        },
        age,
        rank,
    };
};

// const context = useContext(person);

const {rank, age, user} = useContext(person);
const {firstName} = user;

console.log(rank, age, firstName);
