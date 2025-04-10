// marksseet 
var marks = 90;
var grade ;
// if marks are greater than or equal to 90, print "A+"
var conditionA = marks >= 90;
var conditionB = marks >= 60 && marks <90;
var conditionC = marks >=33 && marks >60;
var conditionF = marks <33;
if (conditionA) grade = "A";
else if (conditionB) grade ="B";
else if (conditionC)grade ="C";
else if (conditionF) grade ="D";
console.log("yuor marks is", marks);
console.log("your grade is",grade);
console.log("sir pass kar dena aage padhana chahte hain");

