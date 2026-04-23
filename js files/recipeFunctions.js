//function for displaying recipe page with respective details
function displayRecipeInstructions(rID) {
    //get all page elements
    const currNavTitle=document.getElementById("navTitleText");
    var ingredientsList=document.getElementById("ingredientsList");
    const rTitle=document.getElementById("rTitle");
    const rTags=document.getElementById("recipeTags");
    const rTiming=document.getElementById("recipeTiming");
    const rServing=document.getElementById("recipeServing");
    const rInspo=document.getElementById("recipeInspo");
    var instructionsList=document.getElementById("instructionsList");

    if(recipesObj.hasOwnProperty(rID)) {
        var recipe = recipesObj[rID];
        
        //populate html elements here
        currNavTitle.innerHTML = `<h1 id="navTitleText">${recipe.title}</h1>`;

        //populate ingredients list
        for(let i = 0; i < recipe.ingredients.length; i++){
            let ingredient = document.createElement("li");
            ingredient.appendChild(document.createTextNode(recipe.ingredients[i]));
            ingredientsList.appendChild(ingredient);
        }

        //recipe header section
        rTitle.innerHTML = `<h1>${recipe.title.toUpperCase()}</h1>`;

        for(let j = 0; j < recipe.tags.length; j++){
            let tag = document.createElement("p");
            tag.innerHTML=`<span>${recipe.tags[j]}</span>`;
            rTags.appendChild(tag);
        }

        rTiming.innerHTML=`<p><span><i>time</i>: ${recipe.time}</p></span>`;
        rServing.innerHTML=`<p><span><i>servings</i>: ${recipe.serves}</span></p>`;

        if(recipe.link != "") {
            rInspo.innerHTML = `<p><span><i>inspiration</i>: <a href="${recipe.link}" target="_blank">click here</a></span></p>`;
        }

        else {
            rInspo.innerHTML = ``;
        }

        //populate instructions list
        for(let k = 0; k < recipe.instructions.length; k++){
            let instruction = document.createElement("li");
            let instTxt = document.createElement("p");
            instTxt.innerHTML = `${recipe.instructions[k]}`;
            instruction.appendChild(instTxt);
            instructionsList.appendChild(instruction);
        }

    }
}

//modal information base for each recipe page based on id
/*
 * id: {
        title: "",
        stringID: "",
        time: "",
        serves: "",     
        tags: [
            "",
        ],
        link: "",
        ingredients: [
            "", 
        ],
        instructions: [
            "<span></span>",
        ],
        notes: [
            "",
        ]
    }
 */

const recipesObj = {
    LentilDahl: {
        title: "Lentil Dahl",
        stringID: "LentilDahl",
        time: "1 hour",
        serves: "6",
        tags: [
            "vegan",
            "one pot"
        ], 
        link: "https://www.noracooks.com/red-lentil-dahl/",
        ingredients: [
            "Lentils: 275g",
            "Diced Onions",
            "Chopped Tomatoes: 1 tin",
            "Coconut Milk: 1 tin",
            "Garlic Puree: 2.5 tsp",
            "Ginger Powder: 1/4 - 1/2 tsp",
            "Curry Powder: 1 tbsp",
            "Turmeric: 1 tsp",
            "Chilli Flakes: 1/2 tsp",
            "Vegetable Broth, 700ml",
            "Spinach: 2 - 3 handfuls"
        ],
        instructions: [
            "In a large pot over a medium-high heat, fry your desired amount of <span>diced onions</span> with a pinch of <span>sugar</span> until golden.",
            "Add your <span>lentils</span> and <span>seasonings</span>, and fry for another minute.",
            "Once fragrant, add your <span>chopped tomatoes</span>, <span>coconut milk</span>, and <span>vegetable broth</span>.",
            "Give it a good stir, lower the heat, and leave to simmer for 30-45 minutes, until the lentils are soft and cooked through.",
            "A couple of minutes before serving, add your <span>spinach</span> and stir in to wilt.",
            "Serve up! This can be enjoyed with rice, a bread of your choosing, or by itself!"
        ],
        notes: [
            "This meal can also be made in the slow cooker! Throw all of your ingredients into the pot, give it a good stir, and cook for 4 hours on high (or 8 hours on low)."
        ]
    },

    BeefKatsu: {
        title: "Beef Katsu Curry Noodles",
        stringID: "BeefKatsu",
        time: "20 minutes",
        serves: "2",     
        tags: [
            "30 mins or less",
        ],
        link: "",
        ingredients: [
            "Diced Onions",
            "Diced Carrot",
            "Mince Beef: 250g",
            "Katsu Sauce Blocks: 4",
            "Preferred Noodles: 2 portions",
            "Vegetable Broth: 400ml"
        ],
        instructions: [
            "In a large pot over a medium-high heat, fry your desired amount of <span>diced onions</span> and <span>carrot</span> with a pinch of <span>sugar</span> until golden.",
            "Add your <span>mince</span>, and continue to cook until browned.",
            "Add your <span>stock</span> and bring to the boil. Once bubbling, dissolve your <span>curry blocks</span> into the mix",
            "Lower the heat, and simmer for the amount of time it takes your <span>noodles</span> to boil.",
            "Serve up!"
        ],
        notes: [
            "I recommend cooking your noodles in broth instead of water, makes them much more flavourful! Powdered boullion is good to sprinkle into the boiling water.",
        ]
    },

    ChickenOrzo: {
        title: "Marry Me Chicken Orzo",
        time: "30 mins",
        serves: "2",     
        tags: [
            "one pot",
            "30 mins or less"
        ],
        link: "https://www.tamingtwins.com/marry-me-chicken-orzo/",
        ingredients: [
            "Chicken Breast: x2",
            "Garlic Puree: 1.5 tsp",
            "Tomato Puree: 1 tbsp",
            "Oregano: 1/2 tsp",
            "Paprika: 1 tsp",
            "Orzo: 125g",
            "Chicken Stock: 325ml",
            "Double Cream: 75ml",
            "Parmesan: 25g",
            "Spinach: 1 good handful"
        ],
        instructions: [
            "Dice your <span>chicken breasts</span>, and fry in a splash of <span>oil</span> on high heat until no longer pink.",
            "Reduce the heat and add your <span>seasonings</span>. Stir until fragrant.",
            "Add your <span>orzo</span>, <span>chicken stock</span>, and some <span>salt and pepper</span>. Give it all a good mix!",
            "Cook covered for 10 minutes, or until the orzo and chicken are cooked through.",
            "Turn the heat even lower (or off completely), and add your <span>spinach</span>, <span>cream</span>, and <span>parmesan</span>. Cook until the cream has heated and the spinach wilted.",
            "Serve up!"
        ],
        notes: [
            "",
        ]
    },

    SausagePasta: {
        title: "Sausage and Pepper Pasta Bake",
        time: "30 mins",
        serves: "2",     
        tags: [
            "30 mins or less",
        ],
        link: "",
        ingredients: [
            "Sausages: 6 to 8",
            "Pasta: 150g",
            "Bell Pepper: 1",
            "Pasta Sauce: 1 jar (or equivalent)",
            "Cheese for topping"
        ],
        instructions: [
            "Pre-heat your oven to 200 degrees celsius.",
            "Over a high heat, fry the <span>sausages</span> until browned.",
            "Meanwhile, dice your <span>bell pepper</span>, and boil your <span>pasta</span> for just under the instructed time.",
            "Take out your <span>sausages</span> to cut into bitesize pieces, and add back to the pan with your <span>pepper</span> and <span>tomato sauce</span>.",
            "When your <span>pasta</span> is ready, stir it into your sauce. Move the mixture into an oven safe dish, and top with your <span>cheese</span>.",
            "Bake for 10-15 minutes, or until the top is golden and bubbly.",
            "Serve up!"
        ],
        notes: [
            "",
        ]
    },

    ChickenBiryani: {
        title: "Chicken Biryani",
        time: "30 mins",
        serves: "2",     
        tags: [
            "one pot",
            "30 mins or less"
        ],
        link: "https://www.gousto.co.uk/cookbook/chicken-recipes/one-pot-easy-chicken-biryani",
        ingredients: [
            "Chicken Breasts: 2",
            "Diced Onion",
            "Green Beans",
            "Carrot: 1 or 2",
            "Curry Powder: 1 tbsp",
            "Tomato Puree: 1 tbsp",
            "White Rice: 140g",
            "Chicken Stock: 350ml"
        ],
        instructions: [
            "Dice your <span>chicken breasts</span>, and prepare your <span>vegetables</span> to the size and amount of your liking!",
            "Heat a large pan over a high heat with 1 - 2 tbsp of <span>oil</span>.",
            "Once hot, add your <span>onion</span>, <span>other vegetables</span>, and <span>curry powder</span>. Cook for 2  - 3 minutes, or until softer than before.",
            "Add your <span>chicken</span> to the pan and cook until no longer pink.",
            "Add your <span>tomato puree</span>, and cook for a couple more minutes.",
            "Add your <span>rice</span> and <span>chicken stock</span>, and bring to the boil.",
            "Once boiling, reduce the heat, and cook covered for 10 - 15 minutes (until the rice has cooked through).",
            "Garnish to your taste, and enjoy!"            
        ],
        notes: [
            "If the mixture looks too dry at any point during the covered cooking, add a splash more water!",
        ]
    },

    CubanBeef: {
        title: "Cuban Style Beef",
        time: "4 - 8 hours",
        serves: "4",     
        tags: [
            "slow cooker",
        ],
        link: "https://pinchofnom.com/recipes/cuban-beef-ropa-vieja/",
        ingredients: [
            "Diced Beef: 500g",
            "Diced Onion",
            "Beef Stock: 250ml",
            "Chopped Tomatoes: 1 tin",
            "Bell Peppers: 1 to 2",
            "Garlic Puree: 2 tsp",
            "Tomato Puree: 2 tbsp",
            "Cumin: 1 tsp",
            "Oregano: 1 tsp",
            "Turmeric: 1/2 tsp",
            "Bay Leaves: 2",
            "Corriander: 1 tsp",
            "Red/White Wine Stock Pot: 1",
            "Red/White Wine Vinegar: 1 tsp"
        ],
        instructions: [
            "Cut your <span>bell pepper(s)</span> into strips.",
            "Over a high heat, brown your <span>beef</span> and <span>onions</span>.",
            "Add <span>all ingredients</span> to the slow cooker, stir, and cook for 8 hours on low, or 4 hours on high.",
            "<span>Salt</span> and <span>pepper</span> to taste before serving, and enjoy! Don't forget to take out the bay leaves!"
        ],
        notes: [
            "Can be enjoyed with rice, or as a stew with your favourite sides!",
        ]
    },

    ChickenNoodleSoup: {
        title: "Chicken Noodle Soup",
        time: "4 - 6 hours",
        serves: "4",     
        tags: [
            "slow cooker",
        ],
        link: "https://www.inspiredtaste.net/37475/homemade-chicken-noodle-soup-recipe/",
        ingredients: [
            "Chicken Breasts: 2",
            "Diced Onion",
            "Carrots: 2",
            "Celery: 1 to 2 sticks",
            "Garlic Puree: 2 tsp",
            "Bay Leaves: 2",
            "Thyme: 1/2 tsp",
            "Ginger: 1/4 tsp",
            "Chicken Stock: 1.25L",
            "Pasta/Noodles: 150g"
        ],
        instructions: [
            "Add <span>all ingredients</span> (except your <span>noodles</span>) to your slow cooker and stir. Add the <span>chicken breasts</span> whole and uncooked.",
            "Cook for at least 6 hours on low, or 4 hours on high.",
            "About an hour (or as close to this as possible) before serving, shred the <span>chicken breasts</span>",
            "About 10 minutes from serving, add your <span>noodles</span>",
            "Once the pasta is cooked through, serve up!"
        ],
        notes: [
            "Best enjoyed with crusty bread and butter in my opinion!",
        ]
    },

    BeefMeatballCurry: {
        title: "Beef Meatball Curry",
        time: "25 mins",
        serves: "2",     
        tags: [
            "30 mins or less",
        ],
        link: "https://www.gousto.co.uk/cookbook/recipes/beef-meatball-spinach-curry-with-rice",
        ingredients: [
            "Beef Meatballs: 12 - 16 (6 - 8 each)",
            "Garlic Puree: 1 tsp",
            "Curry Powder: 1 tbsp",
            "Tomato Puree: 2 tbsp",
            "Butter: 1 tsp",
            "Beef Stock: 230ml",
            "Spinach",
            "Rice: 150g"
        ],
        instructions: [
            "On a high heat, cook your <span>meatballs</span> for a couple of minutes on each side, until browned.",
            "Reduce the heat to medium and add your <span>butter</span>, <span>curry powder</span>, and <span>tomato puree</span>. Cook until fragrant.",
            "Add your <span>beef stock</span> to the pan with <span>salt</span> and <span>pepper</span> to taste. Bring to the boil.",
            "Once bubbling, reduce the heat to a low-medium, and cook covered for as long as it takes to cook the <span>rice</span>.",
            "Just before serving, add a handful of <span>spinach</span>, and stir through until wilted.",
            "Enjoy!"
        ],
        notes: [
            "",
        ]
    }
}

//**autocomplete array */
var masterAutocompleteArr = [
    /**recipes */
    "Beef Katsu Curry Noodles",
    "Beef Meatball Curry",
    "Chicken Biryani",
    "Chicken Noodle Soup",
    "Cuban Style Beef",
    "Lentil Dahl",
    "Marry Me Chicken Orzo",
    "Sausage and Pepper Pasta Bake"

    /**tags */

];

//favourites functionality
function displayFavouritesListings(){
    const favListingsDiv = document.getElementById("favDiv");
    var favouritesArr = JSON.parse(localStorage['favourites']);
    
    if(favouritesArr.length > 0) {
        for(let i = 0; i < favouritesArr.length; i++) {
            let listing = document.createElement("recipe-listing");
            listing.id = favouritesArr[i];

            //set heart to favourite by default

            favListingsDiv.appendChild(listing)
        }
    }
}

function addToFavourites(rID) {
    //checks favourites exists in local storage
    if(localStorage.getItem('favourites')) {
        let storage = JSON.parse(localStorage['favourites']);

        //recipe id index not found, doesn't exist in favourites yet
        if(storage.indexOf(rID) == -1) {
            storage.push(rID);
            localStorage.setItem('favourites', JSON.stringify(storage));
            alert("added " + rID + " to storage.");
        }

        //edge case for if already exists in favourites - testing purposes
        else {
            alert(rID + " already in favourites");
        }
    }

    //if favourites doesn't exist in local storage, create it
    else {
        var favStorageArr = [];
        
        //populate with first value
        favStorageArr.push(rID);
        localStorage.setItem("favourites", JSON.stringify(favStorageArr));
        alert("set new favourites list for local storage\nadded " + rID + " to storage.");
    }
}

function removeFromFavourites(rID) {
    //checks favoruites exists in local storage (it should do at this point)
    if(localStorage.getItem('favourites')) {
        //get localStorage string as array
        let storage = JSON.parse(localStorage['favourites']);
        let removalIndex = storage.indexOf(rID);

        //only splice array if rID found
        if(removalIndex > -1) {
            storage.splice(removalIndex, 1);
        }
    }
}

function toggleFavourite() {
    this.classList.toggle("favourite");

    if(this.classList.contains("favourite")) {
        addToFavourites(this.id);
    }

    else {
        removeFromFavourites(this.id);
    }
}