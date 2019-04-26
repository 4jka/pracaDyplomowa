const urlImage = 'file:///run/media/student/ESD-USB/firstShow/form/images/log_in-';

window.onload = function(){
    configuration();
}



function changeBgcImage(){
    const bgcFirst = document.querySelector('.root-bgc');
    const bgcSecond = document.querySelector('.bgcImage');

    setInterval(function(){
        var path = "url('" + urlImage + Math.round(Math.random() * 3 + 1) +".jpg')";
        bgcFirst.style.backgroundImage = path;
     
            (function changeOpacity(){
                var count = 10;
                var timer = setInterval(function(){ 
                    if(count === 0){
                        bgcSecond.style.opacity = 1; 
                        bgcSecond.style.backgroundImage = path;
                        clearInterval(timer);
                    }else{
                        bgcSecond.style.opacity = count/10; 
                        count--;
                    }
                },80);
            }());
           
    },6500);

}