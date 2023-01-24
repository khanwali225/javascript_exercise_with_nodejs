var favPlaces = ["Thailand", "Bali", "Switzerland", "Dubai"];

// Print your array in its original order.
console.log("-----original order----");
for (var a = 0; a < favPlaces.length; a++) console.log(favPlaces[a]);

// Print your array in alphabetical order without modifying the actual list.
console.log("------alphabetical order-----");
var modifylist = favPlaces.slice();
modifylist.sort();
for (a = 0; a < favPlaces.length; a++) console.log(modifylist[a]);

// Show that your array is still in its original order by printing it.
console.log("------still in original order------");
for (var a = 0; a < favPlaces.length; a++) console.log(favPlaces[a]);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("------reverse alphabetical order------");
modifylist.reverse();
for (var a = 0; a < favPlaces.length; a++) console.log(modifylist[a]);

//Show that your array is still in its original order by printing it again.
console.log("------still in original order------");
for (var a = 0; a < favPlaces.length; a++) console.log(favPlaces[a]);

// Reverse the order of your list. Print the array to show that its order has changed.
console.log("------reverse order of your original order------");
favPlaces.reverse();
for (var a = 0; a < favPlaces.length; a++) console.log(favPlaces[a]);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(
  "--------reverse order of your original order again back to its original order--------"
);
favPlaces.reverse();
for (var a = 0; a < favPlaces.length; a++) console.log(favPlaces[a]);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("--------array stored in alphabetical order--------");
favPlaces.sort();
for (var a = 0; a < favPlaces.length; a++) console.log(favPlaces[a]);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("--------reverse alphabetical order--------");
favPlaces.reverse();
for (var a = 0; a < favPlaces.length; a++) console.log(favPlaces[a]);