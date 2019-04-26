import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from "@angular/http";

import { imgGrid } from '../page-search.interface';
import { PageSearchService } from '../page-search.service';
import { CommonService } from '../../../app.service';

@Component({
  selector: 'places-tape',
  templateUrl: './places-tape.component.html',
  styleUrls: ['./places-tape.component.css'] ,
  encapsulation: ViewEncapsulation.None
})

export class PlacesTapeComponent implements OnInit{

  /* Config */
  private container :string = '#placeTape';

  private line :number[];
  private smooth :number;

  constructor(private pageSearchService :PageSearchService,
              private commonService: CommonService,
              private router: Router )
    {
        this.line = [];
        this.smooth = 1;
    }

  ngOnInit() :void {
    this.setCountRows();

    this.pageSearchService.getPlaceGridRandom().subscribe( (response : Response) => {
        this.addImages(response.json());
    });

  }

  /* встановлює кількість рядків в контейнері які відповідають кількості одиниць в місіві*/
  public setCountRows(): void
  {
    for( let i = 0; i < Math.floor( (window.innerHeight - 170) / 200 ); i++ )
    { 
        this.line.push(1); 
    }
  }

  /* Запрос що складає картинки даючи їм розміри в контейнері*/
  public addImages(getImg: Array<imgGrid>):void {

        const images: Array<imgGrid> = getImg;
        const container:HTMLElement = document.querySelector(this.container);

        for(let i = 0; i < images.length; i++){
            const div:HTMLElement = document.createElement('div');
            div.classList.add("wrapperPlace");

            const img = new Image();
            img.src = this.commonService.getServerImgDirectory() + images[i].path_foto;
      
            img.onclick = function(){ openDescription(images[i].id_place); }
            img.onload = function(){ 
                setPositionVariable(this);
                isSmooth(); 
            };

            div.appendChild(img);
            container.appendChild(div);
        }        
    

    /* відкритя детального опису міста */
    const openDescription = funOpenDescription.bind(this); 
    function funOpenDescription(id){
        this.router.navigate(['description/',id]);
    }
    
    /* Перевірка чи є зараз лінія щоб при необхідності відрізати лишні фотограції*/
    const isSmooth = funIsSmooth.bind(this); 
    function funIsSmooth(){
        for(let i = 1; i < this.line.length; i++){
            if(this.line[0] !== this.line[i]) return;
        }
        this.smooth = this.line[0];
    }
    
    /* Розташквання картинок в контейнері */
    const setPositionVariable = setPositionImg.bind(this);
    function setPositionImg(img){
        const firstMinIndex = getFirstMinInd(this.line);
        const size = getCanIgiveSize( getProporsion(img), getArrowRow(this.line,firstMinIndex) );

        img.parentNode.style.gridColumn = getLineImg(this.line[firstMinIndex],size[0]);
        img.parentNode.style.gridRow = getLineImg(firstMinIndex + 1,size[1]);  

        for(let position = firstMinIndex; position < firstMinIndex + size[1]; position++) {
            this.line[position] += size[0];
        }        
    } 
    /* Функції які необхідна для роботи setPositionImg */

    /*індекс першого входження найменшого числа*/
    function getFirstMinInd(array){
        let index = 0;
            for(let i = 1; i < array.length; i++ ){
                if( array[index] > array[i]){
                    index = i;
                }
            }
            return index;
    }

    function getCanIgiveSize(proportion,allowRow){
        // if(proportion > 1.20 && proportion < 1.80){}
            let standart = [
                [1,1],
                [1,2],
                [2,2],
                [2,3],
                [2,4],
                [3,3],
                [3,4],
                // [4,3],
                // [4,4]
            ]
            let newStandart = standart.filter( function(element){
                    return element[1] <= allowRow;
                }
            );
            return newStandart[ getRandomNumber(0, newStandart.length - 1 ) ];
            
    }
    /* кількість однакових цифр в масиві*/
    function getArrowRow(array:number[],index:number):number{
        let count = 1;
        for(let i = index;array[i] === array[i+1] && i < array.length; i++) count++;
        return count;
    }
    function getProporsion(img){
        return (img.naturalWidth / img.naturalHeight).toFixed(3);
    }
    function getRandomNumber(min:number, max:number):number{
        return Math.floor( Math.random() * (max - min) + min );
    }
    function getLineImg(start:number,end:number):string{
        return start + " / " + (start + end);
    }
  }
  
  clearImages():void {
    document.querySelector(this.container).innerHTML = "";
    for(let i = 0; i < this.line.length; i++) this.line[i] = 1; 
    this.smooth = 1;
    (<HTMLElement>document.querySelector(this.container)).style.right = '0';
  }

  showLine():void {
    let max = getMax(this.line);
    for(let j = 1; j <= this.line.length;j++){
        for(let t = this.smooth; t < max; t++){
            if(document.querySelector('[style^="grid-area: '+ j +' / '+ t +'"]') !== null){
                (<HTMLElement>document.querySelector('[style^="grid-area: '+ j +' / '+ t +'"]')).style.display = 'none';
            }
        }
    }

    /* Вертає найбільше число з масива */
    function getMax(array) {
      let index = 0;
      for(let i = 1; i < array.length; i++){
        if( array[index] < array[i]){
            index = i;
        }
      }
      return array[index];
    }      
  }

}

