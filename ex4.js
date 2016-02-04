$(document).ready(function() {

//animate bag img
  $('#button5').animate(
    {
    top: '-176px',
    left: '-271px',
    right: 'auto',
  },
  1000,
  'swing',
  //hover bag img as callback function
function() {
  $('#button5').hover(function(){
    $(this).stop().attr('src', 'assets/images/img5-r.png'); //end function 1
}, function() {
  $(this).stop().attr('src', 'assets/images/img5.png'); //end function 2
  }); //end hover function
}); //end animate and callback functions

//show bag overlay on click
$('#button5').click(function() {
    console.log('click');
    $('#overlay5').css('display', 'block');
    return false;
  });//end show glasses overlay

//animate tea mug img
  $('#button1').delay(1000).animate(
    {
    left: '-2px',
    top: '-1px',
    },
    1000,
    'swing',
//hover tea mug img as callback function
function() {
$('#button1').hover(function(){
  $(this).stop().attr('src', 'assets/images/img1-r.png'); //end function 1
}, function() {
$(this).stop().attr('src', 'assets/images/img1.png'); //end function 2
  }); //end hover function
}); //end animate and callback functions

//show mug overlay on click
$('#button1').click(function() {
    console.log('click');
    $('#overlay1').css('display', 'block');
    return false;
  });//end show mug overlay

//animate glasses img
  $('#button2').delay(1000).animate(
    {
    left: '-263px',
    top: '0px'
    },
    2000,
    'swing',
//hover glasses img as callback function
function() {
$('#button2').hover(function(){
  $(this).stop().attr('src', 'assets/images/img2-r.png'); //end function 1
}, function() {
$(this).stop().attr('src', 'assets/images/img2.png'); //end function 2
  }); //end hover function
}); //end animate and callback functions

//show glasses overlay on click
$('#button2').click(function() {
    console.log('click');
    $('#overlay2').css('display', 'block');
    return false;
  });//end show glasses overlay

//close button
$('.close-button').click(function() {
  $('.overlay').css('display', 'none')
});//end close button

//animate chapstick img
  $('#button3').delay(1000).animate(
    {
    left: '-267px',
    top: '0px'
    },
    1500,
    'swing',
//hover chapstick img as callback function
function() {
$('#button3').hover(function(){
  $(this).stop().attr('src', 'assets/images/img3-r.png'); //end function 1
}, function() {
$(this).stop().attr('src', 'assets/images/img3.png'); //end function 2
  }); //end hover function
}); //end animate and callback functions

//show chapstick overlay on click
$('#button3').click(function() {
    console.log('click');
    $('#overlay3').css('display', 'block');
    return false;
  });//end show chapstick overlay

//animate notebook img
  $('#button4').delay(1000).animate(
    {
    left: '496px',
    top: '-486px'
    },
    2100,
    'swing',
//hover notebook img as callback function
function() {
$('#button4').hover(function(){
  $(this).stop().attr('src', 'assets/images/img4-r.png'); //end function 1
}, function() {
$(this).stop().attr('src', 'assets/images/img4.png'); //end function 2
  }); //end hover function
}); //end animate and callback functions

//show notebook overlay on click
$('#button4').click(function() {
    console.log('click');
    $('#overlay4').css('display', 'block');
    return false;
  });//end show notebook overlay





}); //end ready
