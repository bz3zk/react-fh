import { ItemCounter } from "./shopping-cart/ItemCounter";

// // export function FirstStepsApp(){
// //     return (
// //         <>
// //             <h1>Hola Mundo</h1>
// //             <p>Esto es un parrafo!!!</p>
// //             <button>Click Me</button>
// //             <div>
// //                 <h2>Este es otro div.</h2>
// //             </div>
// //         </>
// //     );
// // };

interface ItemInCart {
    name: string,
    quantity: number | undefined,
};

const itemsInCart: ItemInCart[] = [
    { name: 'Nintendo Switch', quantity: 2 },
    { name: 'PlayStation', quantity: 1 },
    { name: 'Xbox', quantity: 0 }
];

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de Compra</h1>
            {itemsInCart.map(({ name, quantity }) => (
                <ItemCounter key={name} productName={name} productQuantity={quantity} />
            ))}

        </>
    );
};