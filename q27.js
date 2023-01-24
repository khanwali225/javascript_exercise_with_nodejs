
var alien_color = prompt("Enter the color i.e green or yellow or red");
var toLC = alien_color.toLowerCase();

if(toLC === "green"){
    console.log("You just earn 5 point for shooting the alien");
    console.log("alien is green");
} 
else if(toLC === "yellow"){
    console.log("You just earn 10 point for shooting the alien");
    console.log("alien is yellow");
} 
else if(toLC === "red"){
    console.log("You just earn 15 point for shooting the alien");
    console.log("alien is red");
}
else {
    console.log("you entered the invalid color");

}