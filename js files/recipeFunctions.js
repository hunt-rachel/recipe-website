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
            "In a large pot over a medium-high heat, fry your desired amount of diced onions with a pinch of sugar until golden.",
            "Add your lentils and seasonings, and fry for another minute.",
            "Once fragrant, add your chopped tomatoes, coconut milk, and vegetable broth.",
            "Give it a good stir, lower the heat, and leave to simmer for 30-45 minutes, until the lentils are soft and cooked through.",
            "A couple of minutes before serving, add your spinach and stir in to wilt.",
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
            "Under 30 mins",
        ],
        link: "",
        ingredients: [
            "Diced Onions",
            "Diced Carrot",
            "Mince Beef: 250g",
            "Katsu Sauce Blocks: 4",
            "Noodles of your choice: 2 portions",
            "Vegetable Broth: 400ml"
        ],
        instructions: [
            "In a large pot over a medium-high heat, fry your desired amount of diced onions and carrot with a pinch of sugar until golden.",
            "Add your mince, and continue to cook until browned.",
            "Add your stock and bring to the boil. Once bubbling, dissolve your curry blocks into the mix",
            "Lower the heat, and simmer for the amount of time it takes your noodles to boil.",
            "Serve up!"
        ],
        notes: [
            "I recommend cooking your noodles in broth instead of water, makes them much more flavourful! Powdered boullion is good to sprinkle into the boiling water.",
        ]
    }
}