
// Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.
var x = 15;
var y = 34;
console.log(x +y);

//Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.
var clothes = [["Gucci" , "Iceberg" , "Supreme"] , ["Prada" , "Polo" , "Nike"]];
console.log(clothes[0][1]);
console.log(clothes[1][1]);

//Write a script that checks if a variable captured from a prompt is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.

 var num = prompt("Type in your number" + ("num"));
 if (num < 100) {
    alert("You need more Dough");
}else{
    alert(" You got too much money " + (num));
}

//Try running the script and then changing the variable's value to see how this affects the program's output.

var num = prompt("Type in your number" + ("num"));
if (num > 100) {
   alert("You got too much money ");
}else{
   alert(" You need more Dough  " + (num));
}

//Write a similar script to check if a string stored in a variable is the same as another string.
 var a = "GO EAGLES";
 var b = "GO DIRTY BIRDS";
 if (a === b) {
    alert("They match sooooo ");
 }else{
    alert(" Game Over " );
 }

//Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.
function jayzLyrics("lyrics"){
console.log(lyrics);
}
jayzLyrics("lyrics");

 function noLyrics {
     console.log(noLyrics)
 }
//Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.
function foo (){
    console.log(foo)
}

//Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.
function door(choice) {
    if (choice === 1) {
    alert("You won Kim K");
 } else if (choice === 2) {
    alert("You won Khole");
 } else {
    alert("You won Kris Jenner");
 }
 }