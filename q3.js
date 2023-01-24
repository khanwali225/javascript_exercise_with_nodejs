
let myName = prompt("Enter Your full name");
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(toTitleCase(myName));
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}