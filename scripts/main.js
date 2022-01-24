let myHeading = document.querySelector('h1'); /* myheading = a variable that store the h1 value we got from querySelector*/
myHeading.textContent = 'Hello world!'; //one line comment
alert('hi') // a pop-up window show up and display the text
//document.querySelector('html').onclick = function() { //the web will execute this event when we click, the "function" is not a name, it tells that it's executing a function
//    alert('Ouch! Stop poking me!');
//}
let myImage = document.querySelector('img'); // 7~16 = change the picture(src attribute of img) on click
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if( mySrc === 'images/solo-carry.png'){
        myImage.setAttribute('src','images/Zero-damage-victory.png'); // setAttribute('the attribute I want to change','the new value')
    } else{
        myImage.setAttribute('src','images/solo-carry.png');
    }
}
let myButton = document.querySelector('button');
function setUserName(){
    let myName = prompt('Please enter your name.'); //prompt is like alert but it let you input data, if we cancel, then the value is 'null', if enter nothing and press ok, the value is blank(not null)
    if(myName){
        localStorage.setItem('name',myName); // we store the data, localStorage.setItem('variable name', the value we want to store)
        myHeading.textContent = 'Mozilla is cool ' + myName;
    } else{ //myname = false when it's either blank or null
        setUserName();
    }
}
if(localStorage.getItem('name')){
    myHeading.textContent = 'Mozilla is cool ' + localStorage.getItem('name');
} else{
    setUserName();
}
myButton.onclick = function(){
    setUserName();
}
