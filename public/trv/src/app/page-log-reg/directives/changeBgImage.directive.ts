import { Directive, OnInit, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: '[changeBgImage]'
})

export class changeBgImageDirective implements OnInit{
    
    constructor(private element: ElementRef){}

    ngOnInit(){
        const path: string = 'assets/bgForm/log_in-';
        const countPhoto: number = 5;

        const bgcFirst = this.element.nativeElement;
        const bgcSecond = this.element.nativeElement.parentNode;
        
        bgcFirst.style.backgroundImage = getRndomImg();

        setInterval(function(){
            const img = getRndomImg();
            bgcSecond.style.backgroundImage = img; 
         
                (function changeOpacity(){
                    let count = 10;
                    let timer = setInterval(function(){ 
                        if(count === 0){
                            bgcFirst.style.opacity = 1; 
                            bgcFirst.style.backgroundImage = img;
                            clearInterval(timer);
                        }else{
                            bgcFirst.style.opacity = count/10; 
                            count--;
                        }
                    },80);
                }());

        },6500);

        function getRndomImg(){
            return "url('"+ path + Math.round(Math.random() * (countPhoto - 1) + 1) +".jpg')";
        }

    }
}


    


