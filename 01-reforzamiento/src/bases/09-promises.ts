
const myPromise = new Promise<number>( (resolve) => {
    setTimeout(() => {
        resolve(100); //! Yo quiero mi dinero
        // reject('No recupere mi dinero!');
    }, 2000); // 2 segundos
} );

myPromise.then(
    (myMoney) =>{
        console.log(`Tengo de vuelta mi dinero: $${myMoney}`);
    }
).catch(
    (reason) => {
        console.warn(reason);
    }
).finally(
    () => {
        console.log('La vida sigue...');
    }
);