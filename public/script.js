

var score = 0;
$('h2').html("score: " + score)


var bananatime = 2500;


function addRandomBanana() {
  var where = Math.random()*90;
  $("#fourthBox").append('<img style="left:' + where + '%;" class="falling banana" src="http://www.hayzak.com/zach/rpg/banana_factory/images/banana.png">');
}


setInterval(addRandomBanana, bananatime)


$(function() {
  $("#message").append('friend !');
});

$(document).ready(function (){
  
})

$("body").keydown(function(event){
  // 37 is left, 39 is right
  if (event.keyCode === 37) {
    if (minionLeft() > leftBorder()) { // we are on the left edge
      moveMinionLeft();
    }
    
  } else if (event.keyCode === 39) {
      // We'll start here next week!
    if (minionRight() < rightBorder()) {
      moveMinionRight();
    }
    
  }
});

function moveMinionRight() {
  var howFarRight = $("#minion").offset().left + 10;
      $('#minion').css('left', howFarRight)
}
function moveMinionLeft() {
    var howFarLeft = $("#minion").offset().left - 10;
    $('#minion').css('left', howFarLeft);
}



setInterval(function(){
    $(".falling").each(function() {
      var bananaBottom = $(this).offset().top + $(this).height();

      if (bananaBottom > bottomBorder()) {  // banana fell off the screen
        $(this).remove();  // delete the banana
      } else {
        $(this).css("top", $(this).offset().top + 20);    
      }
    });
  
  checkCollision();

}, 500);


function checkCollision() {
    
    var minionTop = $("#minion").offset().top;
    var minionBelow = minionTop + $("#minion").height();
  
    $(".banana").each(function() {
        var bananaLeft = $(this).offset().left;
        var bananaRight = bananaLeft + $(this).width();
        var bananaTop = $(this).offset().top;
        var bananaBelow = bananaTop+ $(this).height();

        if(minionRight() > bananaLeft && minionLeft() < bananaRight &&  minionTop < bananaBelow && minionBelow > bananaTop ){
            score=score+1
            $("h2").html("score: " + score);
            $(this).hide();
        }
    });
}

 
function bottomBorder() {
  return $("#fourthBox").offset().top + $('#fourthBox').height();
}

function leftBorder() {
  return $('#fourthBox').offset().left;
}

function minionLeft() {
  return $('#minion').offset().left;
}

function minionRight() {
  return $('#minion').offset().left + $("#minion").width();
}

function rightBorder() {
  return $('#fourthBox').offset().left + $("#fourthBox").width();
}





