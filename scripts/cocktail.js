const result = document.getElementById('cocktails');
const api1 = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Wine';
const api2 = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Champagne';
const api3 = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Beer';
const api4 = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Brandy';
const api5 = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Cointreau';

getCocktail();

/*
function getCocktail() {
    fetch(api1)
        .then(res => res.json())
        .then(data => {
            const drinksLength = data.drinks.length - 1;
            const drinkArray = data.drinks[randomInt(drinksLength)];
            console.log(data);
            result.innerHTML =
            `
            <img src="${drinkArray.strDrinkThumb}/preview"/>
            `;
        })
}*/

function getCocktail() {
    Promise.all([fetch(api1), fetch(api2), fetch(api3), fetch(api4), fetch(api5)])
        .then(responses => {
            return Promise.all(responses.map(response => {
                return response.json();
            }));
        })
        .then(data => {
            console.log(data);
            const drinksLength1 = data[0].drinks.length - 1;
            const drinkArray1 = data[0].drinks[randomInt(drinksLength1)];

            const drinksLength2 = data[1].drinks.length - 1;
            const drinkArray2 = data[1].drinks[randomInt(drinksLength2)];

            const drinksLength3 = data[2].drinks.length - 1;
            const drinkArray3 = data[2].drinks[randomInt(drinksLength3)];

            const drinksLength4 = data[3].drinks.length - 1;
            const drinkArray4 = data[3].drinks[randomInt(drinksLength4)];
            
            const drinksLength5 = data[4].drinks.length - 1;
            const drinkArray5 = data[4].drinks[randomInt(drinksLength5)];

            result.innerHTML =
            `
            <style>
            
            </style>
            <div class="flex-container">
                <figure>
                    <img src="${drinkArray1.strDrinkThumb}/preview"/>
                    <figcaption>${drinkArray1.strDrink}</figcaption>
                </figure>

                <figure>
                    <img src="${drinkArray2.strDrinkThumb}/preview"/>
                    <figcaption>${drinkArray2.strDrink}</figcaption>
                </figure>

                <figure>
                    <img src="${drinkArray3.strDrinkThumb}/preview"/>
                    <figcaption>${drinkArray3.strDrink}</figcaption>
                </figure>

                <figure>
                    <img src="${drinkArray4.strDrinkThumb}/preview"/>
                    <figcaption>${drinkArray4.strDrink}</figcaption>
                </figure>

                <figure>
                    <img src="${drinkArray5.strDrinkThumb}/preview"/>
                    <figcaption>${drinkArray5.strDrink}</figcaption>
                </figure>
            </div>
            `;
        })
}

function randomInt(max){
    return Math.floor(Math.random() * max)
};
