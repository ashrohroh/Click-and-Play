// when clicking over item 2 square, make square decrease and change into a square
// also making adjustments to the size of the face features on circle 

var onclick2= true;
$("#item2").click(function(){
        
    if (onclick2==true) {
        $(".item2shape1").css('borderRadius', '0px');
        $(".item2shape1").css('width', '100px');
        $(".item2shape1").css('height', '100px');
        $(".mouth").css('width', '20px');
        $(".mouth").css('left', '40%');
        $(".nose").css('width', '10px');
        $(".nose").css('height', '10px');
        $(".eye1").css('width', '10px');
        $(".eye1").css('height', '10px');
        $(".eye2").css('width', '10px');
        $(".eye2").css('height', '10px');
        onclick2=false;
    }
    else {
        $(".item2shape1").css('borderRadius', '100px');
        $(".item2shape1").css('width', '50%');
        $(".item2shape1").css('height', '50%');
        $(".mouth").css('width', '40%');
        $(".mouth").css('left', '30%');
        $(".nose").css('width', '20px');
        $(".nose").css('height', '20px');
        $(".eye1").css('width', '15px');
        $(".eye1").css('height', '15px');
        $(".eye2").css('width', '15px');
        $(".eye2").css('height', '15px');
        onclick2=true;
    } 
});


// item3


// when clicking on item 4 square changing the width of the items
$('#item4').click('click touchstart', function(){
  $('.item').css('width','500px');
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
  // $("#present").toggleClass('hide');
  $("#present").hide();
});

// when clicking on item 12's shape, shows the angry face (revealtext)
$('.item12shape1').click(function() {
    $('.revealtext').toggleClass('display');
//   when clicking on item 12 making the background color fade in and out 
    $(".item").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
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
       $(".item15shape1").animate({
         top:'50%',
         width: '100px',
       },200,function(){});
       
        onclick15=false;
    }
    else {
         $(".item15shape1").animate({
         top:'100%',
         width: '100%',
           
         },1000,function(){});
        onclick15=true;
    }   
});




// when clicking on item 16 square, elongating the width and rotating of the shape


var onclick16= true;
$("#item16").click(function(){
        
    if (onclick16==true) {
       $(".item16shape1").animate({
         top:'0%',
         width: '100px',
       },500,function(){});
       
        onclick16=false;
    }
    else {
         $(".item16shape1").animate({
         top:'100%',
         width: '100%',
           
         },500,function(){});
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
$("#item26").click(function(){
    $(".item26shape1").toggleClass("rotate");
});

// // item27
// var onclick27= true;
// $("#item27").click(function(){
        
//     if (onclick27==true) {
//        $(".item27shape2").animate({
//          width: '0',
//        },200,function(){});
      
//         onclick27=false;
//     }
//     else {
//          $(".item27shape2").animate({
//          width: '100%',
//          },1000,function(){});
//         onclick27=true;
//     }   
// });

// item 27
$("#item27").click(function(){
    $(".item27shape1").toggleClass("rotate");
});

// item 28

var onclick28= true;
$("#item28").click(function(){
        
    if (onclick28==true) {
       $("#item28").animate({
         width: '0px',
         opacity: 0, 
       },200,function(){});
        onclick28=false;
    }
    else {
         $("#item28").animate({
         width: '20%',
           opacity: 100,
         },1000,function(){});
        onclick28=true;
    }   
});

// item 29, font size increases
var onclick29= true;
$("#item29").click(function(){
        
    if (onclick29==true) {
       $(".container").animate({
         fontSize: '100px', 
       },200,function(){});
        onclick29=false;
    }
    else {
         $(".container").animate({
           fontSize: '15px', 
         },1000,function(){});
        onclick29=true;
    }   
});

// item 30, change how columns are organized 
var onclick30= true;
$("#item30").click(function(){
        
    if (onclick30==true) {
        $(".container").css('flex-direction', 'column');
        onclick30=false;
    }
    else {
        $('.container').css('flex-direction', 'row');
        onclick30=true;
    } 
});


// item 31, change how columns are organized 
var onclick31= true;
$("#item31").click(function(){
        
    if (onclick31==true) {
        $(".container").css('flex-wrap', 'nowrap');
        onclick31=false;
    }
    else {
        $('.container').css('flex-wrap', 'wrap');
        onclick31=true;
    } 
});



var onclick32= true;
$("#item32").click(function(){
        
    if (onclick32==true) {
         $(".item32shape1").animate({
         height: '100%', 
       },200,function(){});
       $(".item36shape1").animate({
         height: '100%', 
       },200,function(){});
        onclick32=false;
    }
    else {
        $(".item32shape1").animate({
         height: '0%', 
       },200,function(){});
       $(".item36shape1").animate({
         height: '0%', 
       },200,function(){});
        onclick32=true;
    } 
});

// item 33
var onclick33= true;
$("#item33").click(function(){
        
    if (onclick33==true) {
         $(".item33shape1").animate({
           width: '100%', 
           height:'100%',
       },700,function(){});
      
        onclick33=false;
    }
    else {
        $(".item33shape1").animate({
         width: '100px', 
         height:'100px',
       },700,function(){});
      
        onclick33=true;
    } 
});


var onclick34= true;
$("#item34").click(function(){
        
    if (onclick34==true) {
         $(".item34shape1").animate({
           width: '30%', 
           height:'100%',
       },700,function(){});
      
        onclick34=false;
    }
    else {
        $(".item34shape1").animate({
         width: '100%', 
         height:'30%',
       },700,function(){});
      
        onclick34=true;
    } 
});


var onclick35= true;
$("#item35").click(function(){
        
    if (onclick35==true) {
         $(".item35shape1").animate({
           width: '100%', 
           height:'100%',
       },100,function(){});
        $(".item36shape1").animate({
           opacity: '0',
          width:'100%',
       },100,function(){});
        onclick35=false;
    }
    else {
        $(".item35shape1").animate({
         width: '50%', 
         height:'50%',
       },100,function(){});
       $(".item36shape1").animate({
           opacity: '100',
       },100,function(){});
      
        onclick35=true;
    } 
});


var onclick36= true;
$("#item36").click(function(){
        
    if (onclick36==true) {
         $(".item36shape2").animate({
          opacity:'0',
       },100,function(){});
        onclick36=false;
    }
    else {
        $(".item36shape2").animate({
         opacity:'100',
       },100,function(){});
        onclick36=true;
    } 
});



$('#item37').click('click touchstart', function(){
  $('.item37shape1').toggleClass('skew37');
});

$('#item39').click('click touchstart', function(){
  $('.item').toggleClass('rotate39');
});

$('#item40').click('click touchstart', function(){
  $('.item').toggleClass('borderchange');
});





