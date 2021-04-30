//var x = document.getElementsByClassName("img1");

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
number = randomIntFromInterval(1,6);
 var image = 'dice';
 var imageDice = image + number;
 var imageDiceAgain = imageDice + '.png';
document.querySelectorAll("img")[0].setAttribute('src',imageDiceAgain);

number2 = randomIntFromInterval(1,6);
var imageDice2 = image + number2;
var imageDiceAgain2 = imageDice2 + ".png";
document.querySelectorAll("img")[1].setAttribute('src',imageDiceAgain2);

if(imageDiceAgain2 < imageDiceAgain){
  document.querySelectorAll("h1")[0].innerHTML = "Player 1 Wins" ;
}

if(imageDiceAgain < imageDiceAgain2){
  document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins";
}

if(imageDiceAgain2 == imageDiceAgain){
  document.querySelectorAll("h1")[0].innerHTML = "Draw";
}
 