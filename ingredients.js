const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let i = 0;
// Write a while loop that prints out the contents of ingredients:
while (i < ingredients.length) {
  console.log(ingredients[i])
  i++
}
console.log("\n");
// Write a for loop that prints out the contents of ingredients:
for(let j = 0; j < ingredients.length; j++){
  console.log(ingredients[j]);
}
console.log("\n");

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let x = 7; x >= 0; x--){
  console.log(ingredients[x]);
}