// Select element by Id 
let heading = document.getElementById("heading");
heading.innerText = "DOM Element Selected By ID";


// Select element by tagName 
let paragraph = document.getElementsByTagName("p")
paragraph[0].innerText = "First Paragraph Updated";


// Select Element by ClassName
let buttons = document.getElementsByClassName("sameclass");
buttons[1].innerText = "Click Me";


// Query Selector
let secondHeading = document.querySelector(".secondHeading");
secondHeading.style.color = "blue";



// Query Selector All 
let listItem = document.querySelectorAll("li");

listItem[0].style.color = "green";
listItem[1].style.color = "green";
listItem[2].style.color = "green";
listItem[3].style.color = "green";


// Task 6
let stylePara = document.querySelector(".stylingpara");
stylePara.style.color = "orange";
stylePara.style.fontSize = "22px";
stylePara.style.backgroundColor = "black";