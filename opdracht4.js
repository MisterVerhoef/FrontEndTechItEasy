// const tvFormats = inventory.map((tv) => {
//     return tv.brand + " " + tv.type + " - " + "€" + tv.price + ",- " + tv.availableSizes;
// })
//
// const tvInfo = document.getElementById("tv-stuff");
// tvInfo.textContent = tvName[2];
//
// function showListTvBrands(tvlist) {
//     let list = document.getElementById("our-Tv-Brands-Again");
//     tvlist.forEach((item) => {
//         let li = document.createElement("li");
//         li.innerText = item;
//         list.appendChild(li);
//     });
// }
//
// showListTvBrands(tvBrands);

// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//
//     ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

//   NIKKEI NH3216SMART - HD smart TV
//   €159,-
//   32 inch (81 cm)
//   ```
//
//     * **Opdracht 4a:** Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één
// enkel tv-object (zoals `inventory[0]` of `inventory[6]`) verwacht en de naam op de volgende manier
// samenvoegt: `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`. Test
// of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.


// const tvName = inventory.map((tv) => {
//     return tv.brand + " " + tv.type + " - " + tv.name;
// })

const tvName = inventory.map((tv) => {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
})

const tvInfo = document.getElementById("opdracht4a");
tvInfo.textContent = tvName[2];

//
// * **Opdracht 4b:** Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als
// parameter verwacht (zoals `379`) en daar de volgende string van maakt: `€379,-`. Test of jouw functie ook werkt
// wanneer er een andere tv-prijs wordt meegegeven.


// function createPrice(tv) {
//     let tvPrices = tv.map((t) => {
//         return t.price;
//     })
// }



// const tvPrice = inventory.map((tv) => {
//     return "€" + tv.price + ",-";
// })

const tvPrice = inventory.map((tv) => "€" + tv.price + ",-");


const tvPriceInfo = document.getElementById("opdracht4b");
tvPriceInfo.textContent = tvPrice[1];


// * **Opdracht 4c:** Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in
// zowel _inches_ als _cm_. Doe dit door een functie te schrijven die één screen-sizes array verwacht (
//     zoals `inventory[0].availableSizes`) en de groottes op de volgende manier
// samenvoegt: `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
// etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
// schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`.
//     Test of jouw functie werkt in alle mogelijke gevallen.
//


// const tvSizeMakeUp = inventory.map((tv) => {
//     return tv.availableSizes + " inch" + "(" + (tv.availableSizes * 2,54) + " cm)" ;
// })





    function tvSizeFormat(tv) {
        let tvSizeMakeUp = ''
        for (let i = 0; i < tv.length; i++) {
            const inch = tv[i];
            const cm = tv[i] * 2.54;
            tvSizeMakeUp = tvSizeMakeUp + `${inch} inch ${cm} cm`;
            if (i < tv.length - 1) {
                tvSizeMakeUp = `${tvSizeMakeUp} | `;
            }
        }
        return tvSizeMakeUp
    }


    const tvSizeInfo = document.getElementById("opdracht4c");
    tvSizeInfo.innerHTML = `
<p> ${tvSizeFormat(inventory[5].availableSizes)}</p>
`;




// * **Opdracht 4d:** Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
// Gebruik hiervoor de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//



const tvDetailsInfo = document.getElementById("opdracht4d");
tvDetailsInfo.innerHTML = `
<p>${tvName[5]} <br> ${tvPrice[5]} <br> ${tvSizeFormat(inventory[5].availableSizes)}</p>
`;

// * **Opdracht 4e:** Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je
// natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
// Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De
// overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan
// te roepen!

function tvNameFormat(tvArray) {
    const tvName = tvArray.map((tv) => {
        return tv.brand + tv.type + tv.name;
    })
}

tvNameFormat(inventory);

function tvPriceList (tvList) {
    const tvPrices = tvList.map((tv) => {
        return ` €${tv.price},-`
    });
    infoTvBundles.innerHTML = `${tvPrices.join('|')}`;
}




//     function generateTvList(tvArray) {
//         const infoTvBundles = document.getElementById('opdracht4e');
//         const tvModels = tvArray.map((tv) => {
//             return `
//         <li>
//         <p>${tvName(tv.name)}</p>
//         <p>${tvPriceList(tv.price)}</p>
//         <p>${tvSizeFormat(tv.availableSizes)}</p>
//         </li>
//         `
//         });
//         infoTvBundles.innerHTML = `${tvModels.join('')}`;
//     }
//
// generateTvList(inventory);