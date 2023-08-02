$(function() {

 
    $('#myButton').click(function() {
        $.scrollTo($('#myDiv'), 1000);
     });
 
 });


 //slideshow style interval
var autoSwap = setInterval( swap,3500);

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});