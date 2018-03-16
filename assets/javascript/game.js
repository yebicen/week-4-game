$(document).ready(function() {
    
  

//start the game when user open up the page or refresh the page



var target;
var randomnumber;
var crystals = $("#crystals");
var counter = 0;
var wins = 0;
var loss = 0;


// set icon images in an array
var imgs =[
  "assets/images/crystal1.jpg",
  "assets/images/crystal2.jpg",
  "assets/images/crystal3.jpg",
  "assets/images/crystal4.jpg",
]



//start the game when user open up the page or refresh the page




//generate the target number
target = Math.floor(Math.random()*69)+30;
console.log("the target number is " + target)
$("#target").html(target);



gameloop();


function gameloop(){
//generate 4 random numbers at once using for loop
for (var i = 0; i < 4; i++) {
  var randomnumber = Math.floor(Math.random()*12);
  console.log(randomnumber);


var imageCrystal = $("<img>");
imageCrystal.attr("src", imgs[i]);
imageCrystal.attr("class", "crystal-image");


// Each imageCrystal will be given a data attribute called data-crystalValue which equal to the randomnumber that computer generate
imageCrystal.attr("data-crystalvalue", randomnumber);

// append all crystal icons to the crystals div set in the html at the beginning
crystals.append(imageCrystal);
}




//onclick event for each crystal icon
crystals.on("click", ".crystal-image", function() {

var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);

// Every click, from every crystal adds to the global counter.
counter += crystalValue;
console.log("total now is " + counter);

 //condition
 if(counter>target){
  loss++;
  alert("You Lose!")
  counter=0
  // $.removeData(imageCrystal);
  $('#crystals').empty();
  gameloop();
};

if(counter === target){
  wins++;
  alert("You Win!");
  counter=0
  // $.removeData(imageCrystal);
 $('#crystals').empty();
  gameloop();
}

var result =
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + loss + "</p>";
 

// Set the inner HTML contents of the #game div to our html string

$("#final").html(counter);
$("#score").html(result);



});

//end of game loop
}

});
