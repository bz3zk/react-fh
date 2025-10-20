// const userNames = ['David', 'Daniel', 'Martha'];

// const [usuario1, usuario2] = userNames;
// const [,,usuario3] = userNames;

// const returnArrayFn = () => {
//     return ['ABC', 123] as const;
// }

// const [letters, numbers] = returnArrayFn();

// console.log(usuario1, usuario2, usuario3, letters, numbers);

const useState = (name:string) => {
    return [name, (newName:string) => {console.log(newName)}] as const;
};

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');
