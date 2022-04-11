// * **Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
const amountOfTvsSold = inventory.map((tv) => {

   return tv.sold;

})

let totalTvSold = 0;
for(let i = 0; i < amountOfTvsSold.length; i++) {
   totalTvSold += amountOfTvsSold[i];
}

console.log(totalTvSold);


// * **Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.

const tvSold = document.getElementById("tvSold");
tvSold.textContent = totalTvSold;

// * **Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
const amountOfTvsOrdered = inventory.map((tv) => {

   return tv.originalStock;

})

let totalTvOrdered = 0;
for(let i = 0; i < amountOfTvsOrdered.length; i++) {
   totalTvOrdered += amountOfTvsOrdered[i];
}

console.log(totalTvOrdered);

// * **Opdracht 2d:** Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.
const tvBought = document.getElementById("tvBought");
tvBought.textContent = totalTvOrdered;

// * **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.

const tvLeft = document.getElementById("tvLeft");
tvLeft.textContent = totalTvOrdered - totalTvSold;

