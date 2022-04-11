// Opdracht 1 - Array Methoden
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

const tvType = inventory.filter((tv) => {
    return tv.type;
})

console.log(tvType);


//     Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

const tvSoldOut = inventory.filter((tv) => {
    if (tv.originalStock === tv.sold)
        return inventory;
})

console.log(tvSoldOut)

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

const tvAmbiLight = inventory.filter((tv) => {
    if (tv.options.ambiLight === true)
        return inventory;
})

console.log(tvAmbiLight);

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

inventory.sort((a, b) => {
    return a.price - b.price;
})

console.log(inventory.sort());

function tvPriceSort (tvArray){
    let priceList = [];
    const sortedPrices = tvArray.sort((a, b) => {
        return a.price - b.price;
    })
    return priceList;
}