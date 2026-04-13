//modal information base for each recipe page based on id
/*
 * id: {
        title: "",
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
            "",
        ],
        notes: [
            "",
        ]
    }
 */

//function for displaying recipe page with respective details
function displayRecipeInstructions(rID) {
    //get all page elements
    const currNavTitle=document.getElementById("navTitleText");
    var ingredientsList=document.getElementById("ingredientsList");
    const rTitle=document.getElementById("rTitle");
    const rTags=document.getElementById("recipeTags");
    const rTiming=document.getElementById("recipeTiming");
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

const recipesObj = {
    LentilDahl: {
        title: "Lentil Dahl",
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
        title: "",
        time: "",
        serves: "",     
        tags: [
            "one pot",
            "30 mins or less"
        ],
        link: "https://www.gousto.co.uk/cookbook/chicken-recipes/one-pot-easy-chicken-biryani",
        ingredients: [
            "",
        ],
        instructions: [
            "",
        ],
        notes: [
            "",
        ]
    }
}