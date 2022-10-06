const search = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

search.addEventListener("input", e => {
    const value = e.target.value
    console.log(value)
})

//this listens for DOM content loaded just in case
document.addEventListener('DOMContentLoaded', () => {

async function getFood() {
        let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+ search.value);
        //convert data to json
        const data = await response.json();
        // console.log(data)
        //loop over
        let i = 0;
        for(i = 0; i < data.meals.length; i++){
            const foodInfo = data.meals[i];
            console.log(foodInfo)
            const foodContainer = document.createElement("div");
            foodContainer.classList.add("card");
    
            foodContainer.innerHTML=
            `<div class="card">
                <img src="${foodInfo.strMealThumb}" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>${foodInfo.strMeal}</b></h4>
                  <p>${foodInfo.strArea}</p>
                  
                </div>
              </div>`;
              const foodRow = document.getElementsByClassName("food-cards");
              foodRow[0].appendChild(foodContainer);
                }
            }
         getFood();
});