// when placing mouse over item 2 square, make square decrease and change into a square
// also making adjustments to the size of the face features on circle 
$('#item2').mouseover(function(){
  $('.item2shape1').animate({ 
    borderRadius:'0px',
    width: '100px',
    height:'100px',
  },500,function(){});
  
  $('.mouth').animate({ 
    width: '20px',
    left: '40%',
  },500,function(){});
  
  $('.nose').animate({ 
    width: '10px',
    height: '10px',
  },500,function(){});
    
  $('.eye1').animate({ 
  width: '10px',
  height: '10px',
  },500,function(){});
  
  $('.eye2').animate({ 
  width: '10px',
  height: '10px',
  },500,function(){});
  
});  

// when removing mouse from item 2 square, make shape a circle again and increase in size (regular size)
// also making adjustments to the size of the face features on circle 
$('#item2').mouseout (function(){
  $('.item2shape1').animate({
    borderRadius:'100px',
    width: '50%',
    height:'50%',
  },500,function(){});
  
  $('.mouth').animate({ 
    width: '40%',
    left: '30%',
  },500,function(){});
  
  $('.nose').animate({ 
    width: '20px',
    height: '20px',
  },500,function(){});
  
  $('.eye1').animate({ 
  width: '15px',
  height: '15px',
  },500,function(){});
  
  $('.eye2').animate({ 
   width: '15px',
  height: '15px',
  },500,function(){});
  
});

// when hovering over item 3 make item 4 square wider and have larger margins in between
$('#item3').mouseover(function(){
  $('.item4shape1').animate({
    width:'100%',
  },300,function(){});

}); 
    
$('#item3').mouseout (function(){
  $('.item4shape1').animate({
    width: '20%',
  },300,function(){});
}); 

// when clicking on item 4 square changing the style of the shapes
$('#item4').click(function() {
    $('.item4shape1').toggleClass('onclick');
}); 

// when clicking on item 5 square, making all of the item sqaures black
$('#item5').click('click touchstart', function(){
  $('.item').css('background-color','black');
});
  

// when clicking on item 6 square, making all of the item squares to yellow color
$('#item6').click('click touchstart', function(){
  $('.item').css('background-color','#FFFCAA');
  $('.item').css('color','#FF69AA');
});

// when clicking on item 7 square, refresh the page
$('#item7').click(function() {
    location.reload();
});

// when clicking on item 8 square, making all of the item sqaures skewed 
$('#item8').click('click touchstart', function(){
  $('.item').toggleClass('chaos');
});

//when clicking item 10, make the image of food appear
$(document).ready(function(){
  $("#item10").click(function(){
    $("#present").slideDown("5");
  });
});

// keeps on giving image over and over again when clicked
$("#present").click(function(){
  $("#present").hide();
});

// when clicking on item 12's shape, shows the angry face (revealtext)
$('.item12shape1').click(function() {
    $('.revealtext').toggleClass('display');
//   when clicking on item 12 making the background color fade in and out 
    $(".item").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
}); 


/* item 14 - When I mouse over the box's corners are rounded */
  $('#item14').mouseover(function(){
  $('#item14').animate({
    borderRadius:"1000px"
  },100,function(){});
     
  }); 
  
  $('#item14').mouseout(function(){
  $('#item14').animate({
    borderRadius:"0px"
  },100,function(){});
     
  }); 

// when clicking on item 14 shape, shape becomes as big as box

var onclick14= true;
$("#item14").click(function(){

    if (onclick14==true) {
        $(".item14shape1").css('width', '100%');
        $(".item14shape1").css('height', '100%');
        onclick14=false;
    }
    else {
       $(".item14shape1").css('width', '100px');
        $(".item14shape1").css('height', '100px');
        onclick14=true;
    }   
});


// when clicking on item 15 square, making shape fill the entire sqaure
// https://www.codegrepper.com/code-examples/javascript/jquery+if+else+on+click

var onclick15= true;
$("#item15").click(function(){
        
    if (onclick15==true) {
        $(".item15shape1").css('height', '100px');
        $(".item15shape1").css('width', '100px');
        onclick15=false;
    }
    else {
        $('.item15shape1').css('height', '100%');
        $('.item15shape1').css('width', '100%');
        onclick15=true;
    }   
});


// when clicking on item 16 square, elongating the width and rotating of the shape

var onclick16= true;
$("#item16").click(function(){
        
    if (onclick16==true) {
        $(".item16shape1").css('width', '100%');
  
        onclick16=false;
    }
    else {
        $('.item16shape1').css('height', '100%');
        onclick16=true;
    } 
});

// when clicking on item 17 square, increasing the space between each circle
var onclick17= true;
$("#item17").click(function(){
        
    if (onclick17==true) {
        $(".item17shape1").css('width', '400px');
        onclick17=false;
    }
    else {
        $('.item17shape1').css('width', '30px');
        onclick17=true;
    } 
});

// on click change item 18 circle layout columns
$('#item18').click(function() {
    $('.item18shapes').toggleClass('onclick');
}); 


// on click change location and formatting of circles 
$('#item19').click(function() {
    $('.item19shapes').toggleClass('onclick');
}); 

// on click change space between each circle on square 20
$('#item20').click(function() {
    $('.item20shape1').toggleClass('onclick');
}); 

// on click change color of the item 23 square
$('#item23').click(function() {
// Returns a random integer from 0 to 99:
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);
    
  $(this).css("background-color", "rgb(" + r + "," + g + "," + b+ ")");
}); 


// on item 24 click change background-color and color (number) of all items 

$('#item24').click(function() {
// Returns a random integer from 0 to 99:
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);
    
  $('.item').css("background-color", "rgb(" + r + "," + g + "," + b+ ")");
}); 

$('#item24').click(function() {
// Returns a random integer from 0 to 99:
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);
    
  $('.item').css("color", "rgb(" + r + "," + g + "," + b+ ")");
}); 



// when clicking item 25 make all items 100% width
var onclick25= true;
$("#item25").click(function(){
        
    if (onclick25==true) {
        $(".item").css('width', '100%');
        onclick25=false;
    }
    else {
        $('.item').css('width', '20%');
        onclick25=true;
    } 
});

// item 26














