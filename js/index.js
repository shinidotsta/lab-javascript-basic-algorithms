// Iteration 1: Names and Input
var hacker1="SHINI";
console.log(hacker1);
var hacker2="DIA";
console.log(hacker2);

// Iteration 2: Conditionals
console.log(hacker1.length);
console.log(hacker2.length);
var diff=hacker1.length-hacker2.length;

if(hacker1.length>hacker2.length)
{
console.log("The driver has the longest name, it has"+diff+"more characters");
}
else if(hacker1.length<hacker2.length)
{
    console.log("It seems that the navigator has the longest name, it has"+diff+ "characters.");
}
else if(diff==0)
{
    console.log("Wow, you both have equally long names");
}

// Iteration 3: Loops
var driver=hacker1.toUpperCase();
var arr=driver.split("");
console.log(arr+" ");
for(let i=hacker2.length;i>=0;i--)
{
    console.log(hacker2[i]);
}
var a=hacker1.localeCompare(hacker2);
console.log(a);

if(a==0)
console.log("What?! You both have the same name?");
else if(a>0)
console.log("Yo, the navigator goes first definitely.");
else if(a<0)
console.log("The driver's name goes first.");

//--------------------for finding the word in a string-------*

var str=new String("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");
//console.log(str.length);
str = str.replace(/(^\s*)|(\s*$)/gi,"");  //remove end and start spaces
str = str.replace(/[ ]{2,}/gi," "); //multiple spaces into a single space
str = str.replace(/\n /,"\n"); //exclude a new line with a start spacing.

console.log(str.split(' ').length);

//----------------for finding the count of substring 'et'---
var subcount=(str.match(/et/g) || []).length;
console.log(subcount);

//--------------------Palindrome checking--------------
var phraseToCheck="Amor, Roma";
    phraseToCheck=phraseToCheck.replace(/ +/g,"");
    var flag=false;
    for(let i=0;i<phraseToCheck.length/2;i++)
    {
        if(phraseToCheck[i] !=phraseToCheck[phraseToCheck.length-1-i])
        {
            flag= false;
        }
        else
        flag=true;   
    }
   if(flag==true)
   console.log("palindrome");
   else
   console.log("Not palindrome");