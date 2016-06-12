// Just a simple game I made to test my skill

var Age = prompt ("What's your age?");
if (Age < 13)
{
console.log("You're to young to play");
}
else
{
console.log("Great, lets go");
}
var Direction = prompt ("left or right?");
if (Direction === "left")
{
console.log("You went off a cliff");
}
else 
{
console.log("You can't go in that direction there is a wall.");
}
