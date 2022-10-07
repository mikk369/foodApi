


async function getFood() {
        let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        //convert data to json
        const data = await response.json();
        // console.log(data)
        //loop over
        let i = 0;
        for(i = 0; i < data.meals.length; i++){
            const foodInfo = data.meals[i];
            // console.log(foodInfo)
            //create div 
            const foodContainer = document.createElement("div");
            //give div a class
            foodContainer.classList.add("card");
          //container inner html
            foodContainer.innerHTML=
            `<img src="${foodInfo.strMealThumb}" alt="Avatar"         style="width:100%">
                <div class="container">
                  <h4><b>${foodInfo.strMeal}</b></h4>
                  <p>${foodInfo.strArea}</p>
                </div>`;
                //getting the food-card div to append the foodContainer
              const foodRow = document.getElementsByClassName("food-cards");
              foodRow[0].appendChild(foodContainer);
                }
            }
            
            const search = () => {
              const searchInput = document.getElementById("search-input").value.toLowerCase();
              const foodCards = document.getElementById("food-cards");
              const food = document.querySelectorAll(".card");
              const fName = foodCards.getElementsByTagName("h4");

              //create forloop
              for(let i = 0 ; i < fName.length ; i++){
                //get all elements with tag name  h4
                let match = food[i].getElementsByTagName("h4")[0];
                    // console.log(match)
                if(match) {
                  //if text and html content of the match is ture 
                   let textValue = match.textContent || match.innerHTML
                   if(textValue.toLowerCase().indexOf(searchInput) > -1) {
                    food[i].style.display = "";
                   }else {
                    food[i].style.display = "none";

                   }
                }

              }

              
            }

         getFood();
