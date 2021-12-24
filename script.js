
let button1 = document.getElementById('button1'); 
let button2 = document.getElementById('button2');

var slideIndex = 1;

button1.addEventListener('click', function(){
  showDives();
  plusDives(1);
})

button2.addEventListener('click', function(){
  showDives();
  plusDives(+1);
})

function plusDives(n){
  showDives(slideIndex += n);
}


function showDives(n){
  var i;
  var x = document.getElementsByClassName('myslider');

  

    if(n > x.length) {slideIndex = 1;}
  
    if(n < 1) {slideIndex = x.length}
  
    for(i = 0; i < x.length; i++ ){
      x[i].style.display = 'none';
    }
  
    x[slideIndex-1].style.display = 'block';
  
}