// const foodCardTemplate = document.querySelector("[food-data-template]");
//this listens for DOM content loaded just in case
document.addEventListener('DOMContentLoaded', () => {

async function getFood(search) {
    try {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    //convert data to json
    const data = await response.json();
    console.log(data)
    //loop over ress
  data.Search?.forEach((food)=>{
    //create div
    const foodContainer = document.createElement("div");
    //give class name
    foodContainer.classList.add("card");

    //create inner html
    foodContainer.innerHTML = `
    <div class="card">
            <img src="${food.strMealThumb}" alt="Avatar" style="width:100%">
            <div class="container">
              <h4><b>${food.strMeal}</b></h4>
              <p>${food.strArea}</p>
            </div>
          </div>`;
          const foodRow = document.getElementsByClassName("food-cards");
          foodRow[0].appendChild(foodContainer);
        });
      }catch (error){
        console.log("Error", error);
    }
}

//add event listeners to search button
const submitButton = document.getElementById("search-button");
let i = 0;
for (i = 0; i < submitButton.length; i++) {
    submitButton[i].addEventListener('click', (response) => {
      response.preventDefault();
      //get search term from input
      const search = document.getElementById('search').value;
      //goto loadMovie function
      getFood(search);
      //console log search term
      console.log('search', search);
    });
  }
//   //add search by ENTER key
//   document.addEventListener('keydown', function (e) {
//     // console.log(e.key);
//     if (e.key === 'Enter') {
//       document.getElementsByClassName('submit-button').click();
//     }
// });    
});