var favorite_fruits = ["kiwi", "straberry", "apple"];
var search_fruits = ["kiwi", "orange", "straberry"];
var result = [];
for (var a = 0; a < 3; a++) {
  result[a] = favorite_fruits.includes(search_fruits[a]);
}
for (a = 0; a < 3; a++) {
  if (result[a]) {
    console.log("You really like " + search_fruits[a]);
  }
}