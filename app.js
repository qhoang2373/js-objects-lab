// const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],

    // Exercise 3
    // 1. Add a new property to the `game` object. Let's call it "difficulty".
    // 2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?
    
    // Solve Exercise 3 here:
    // */
    
    difficulty: ["Hard"]

  }

    console.dir(pokemon, { maxArrayLength: null })
    console.log(game)
    console.log(pokemon.indexOf('Arcanine'))

  // breakdown
  // objects start with "{}" so in this case game is the object 
  // we are looking to add "difficulty" as a property to the game object 
  // so it will look liks this 
  // game = { 
  // difficulty: 'Hard'
  // };


/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?

Solve Exercise 4 here:
*/

 game.party.push(pokemon [6]);
 

 // breakdown
 // game.party is used because the question asks for the "game.party" array
 // .push is used because we are adding an element to the end of an array
 // "pokemon[6]" is used because wea re selecting from the pokemon array for the 7th pokemon in the list 

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

game.party.push(pokemon[93], pokemon[149], pokemon[144]);

// breakdown
// game.party is used again because we choosing 3 more pokemon and adding them from the game object's party property
// .push is used again because we are adding to the end of an array
// pokemon[93], pokemon[149], pokemon[144] is used because ware taking this from the pokemon array and selecting it for our party

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

game.gyms.forEach(gyms => {
  if (gyms.difficulty < 3)
    gyms.completed = true;

  });


console.log(game.gyms);

// breakdown
// game.gyms.forEach is used because we are taking the gyms property from the game object and looking through
// each of the arrays in "gyms" and stating that if the gym's difficulty is less than 3 then
// mark the gym's completed property as true
// we are using an if statement because we are looping through an array and searching

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

(game.party.splice(0, 1, pokemon[7]));

// breakdown
// game.party is used because we are taking data from the game object's party attributing and adding to it. 
// .splice is used because we are replacing a pokemon in our party for the one that it will evolve into. 
// .splice syntax: (start number, deleteCount, "ItemToAdd")
// we are starting from squirtle with the 0 index
// deleting squirtle with deletecount of 1
// and adding in its place the 8th pokemon in the list

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

game.party.forEach(party => {
  console.log(party.name);
});

// breakdown
// game.party is used because we will be working with the game's property which is party
// specifically we will be printing out the name of each pokemon in it
// forEach is used because we will be looping through the party's array
// console.log(party.name) we will be logging in the name's of the pokemon in our party

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

pokemon.forEach(pokemon => {
  if (pokemon.starter)
  console.log(pokemon.name);
});

// breakdown
// we are using a forEach loop to loop through the pokemon array.
// we are identifying if any of them are starter pokemons
// and then will console.log their names

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

game.catchPokemon = function(pokemonObj) {
	game.party.push(pokemonObj);
    
};

game.catchPokemon(pokemon [129]);


// breakdown
// we are using the same method for Objects hence why it is game.catchPokemon = function(pokemonObj) {};
// game.party.push(pokemonObj); is to add the 'pokemonObj' to the 'game.party' array
// we then console.log the game.catchPokemon function

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj);
  game.items[1].quantity -= 1

};

console.log(game.items[1])
console.log(game.catchPokemon(pokemon [1]));
console.log(game.items[1])

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

game.gyms.forEach(gyms => {
  if (gyms.difficulty < 6)
    gyms.completed = true;

  });

console.log(game.gyms);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

const gymTally =  {
  completed: 0,
  incomplete: 0,
}

game.gymStatus = function () {
  for (let i = 0; i <  game.gyms.length; i++) {
    const currentGym = game.gyms[i];
    if (currentGym.completed) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  };

},

console.log(gymTally);
game.gymStatus();

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/


game.partyCount = function () {
    return game.party.length;
  }

console.log(game.party.length);

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

game.gyms.forEach(gyms => {
  if (gyms.difficulty < 8)
    gyms.completed = true;

  });

console.log(game.gyms);

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game)