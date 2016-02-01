









// Take the contents of the sonnet div and place it in a variable
var sonnetContents = document.getElementById("sonnet").innerHTML;
console.log(sonnetContents);

// Find and output the starting position of the word "orphans"

var o = sonnetContents.indexOf("orphans")
console.log(o);

// Output the number of characters in the sonnet
console.log(sonnetContents.length);

// Replace the first occurance of the string "winter" with "yuletide"
sonnetContents = sonnetContents.replace("winter", "yuletide");

// Replace all occurances of the string "the" with "a large"
var newstr = sonnetContents.replace(/the(\b)/g, "a large");
console.log(newstr);  
// Set the content of the sonnet div with the new string
// 
//document.getElementById("sonnet").innerHTML = newstr;
sonnet.innerHTML = newstr;
