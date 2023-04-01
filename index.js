
//Detecting Mouse Press
for(var i=0;i<7;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){

        var buttonInnerHTML= this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonHighlight(buttonInnerHTML);
    });
}

//Detecting Keyborad Press
document.addEventListener("keydown", function(my_keyevent){
    makeSound(my_keyevent.key);
    buttonHighlight(my_keyevent.key);
});

function makeSound(key)
{
    switch(key)
        {
            case "w":
                var tom1=new Audio("sounds/tom-1.mp3")
                tom1.play();
                break;
            case "a":
                var tom2=new Audio("sounds/tom-2.mp3")
                tom2.play();
                break;
            case "s":
                var tom3=new Audio("sounds/tom-3.mp3")
                tom3.play();
                break;
            case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "k":
                var kickbass=new Audio("sounds/kick-bass.mp3");
                kickbass.play();
                break;
            case "l":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
            default:
                console.log(key);
        }
}

function buttonHighlight(current_key)
{
    var activeButton= document.querySelector("."+current_key);
    activeButton.classList.add("pressed");

    setTimeout(function(){ activeButton.classList.remove("pressed"),3500});
}


// document.querySelectorAll("button")[i].addEventListener("click", function (){
//     alert("The button was clicked");
// });
// this is an example of anonymous function. Instead of separately declaring a function with a specific name, we simply define the function annonymously within the parameter section of addEveneListener


// the alternative method would be to use this line of code inside the loop
// document.querySelectorAll("button")[i].addEventListener("click", handleClick);
// function handleClick(){
//     alert("Clicked");
// }
// However, this method is generally not used