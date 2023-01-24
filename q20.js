
var list = [];
var boolean = true;
console.log(typeof boolean);
// for (; bool; ) {
//   console.log("d");
// }
for (; boolean; ) {
  list.push(
    prompt(
      "Enter anything you want like mountains, rivers, countries, cities, languages"
    )
  );

  var a = prompt("do you want to continue, enter yes or no");
  if (a == "no") {
    boolean = false;
    // break;
  }
}
console.log("-------Your list contains-------- ");
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}