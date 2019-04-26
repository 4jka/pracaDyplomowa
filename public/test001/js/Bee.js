/* Different Grid Images Position*/
var soldierBee = new Bee();
soldierBee.setNumberRows(200);
soldierBee.addImages(allPlaces);

function Bee(){
    this.line = [];
    this.smooth = 1;

    this.setNumberRows = function(cssHeight){/* 110 */
        for(var i = 0; i < Math.floor((screen.height - 300) / cssHeight); i++ ){ this.line.push(1);}
    } 
    this.clearImages = function(){
        document.querySelector('#containerGridPlaces').innerHTML = "";
        for(var i = 0; i < this.line.length; i++){ this.line[i] = 1; }
        this.smooth = 1;
    }
    this.addImages = function(obj){
        var container = document.querySelector('#containerGridPlaces');

        var setPositionImgGrid = setPositionImgGrid.bind(this);
        var deleteTempImg = deleteTempImg.bind(this);
        var i = 0;
        for(key in obj){

            var div = document.createElement('div');
            div.className = "wrapperGridImg";
            div.idPlace = key;

            var image = new Image();
            image.src = 'img/' + obj[key].allPhoto[0];

            div.onclick = function(){ 
                fillSectionSP(allPlaces[this.idPlace]);
                routes.showSeparatePlace();
             }
        
            div.appendChild(image);
            container.appendChild(div);
 
            /* action */
            image.onload = function(){ 
                setPositionImgGrid(this);
                deleteTempImg(i);
                i--;
             };

            i++;
        }

        function deleteTempImg(i){
            if(!isSmooth(this.line)){this.smooth = this.line[0];}
            
            if(i === 1 && isSmooth(this.line)){

                var max = getMax(this.line);
                for(var j = 1; j <= this.line.length;j++){
                    for(var t = this.smooth; t < max; t++){
                        if(document.querySelector('[style^="grid-area: '+ j +' / '+ t +'"]') !== null){
                            document.querySelector('[style^="grid-area: '+ j +' / '+ t +'"]').style.display = 'none';
                        }
                    }
                }

                function getMax(array){
                    var index = 0;
                        for(var i = 1; i < array.length; i++ ){
                            if( array[index] < array[i]){
                                index = i;
                            }
                        }
                    return array[index];
                }         
                
            }
        }
        function isSmooth(array){
            for(var i = 1; i < array.length; i++){
                if(array[0] !== array[i]){
                    return true;
                }
            }
            return false;
        }

        function setPositionImgGrid(img){
            var firstMinIndex = getFirstMinInd(this.line);
            var size = getCanIgiveSize( getProporsion(img), getArrowRow(this.line,firstMinIndex) );

            img.parentNode.style.gridColumn = getLineImg(this.line[firstMinIndex],size[0]);
            img.parentNode.style.gridRow = getLineImg(firstMinIndex + 1,size[1]);  

            for(var position = firstMinIndex; position < firstMinIndex + size[1]; position++) this.line[position] += size[0];

            /*індекс першого входження найменшого числа*/
            function getFirstMinInd(array){
                var index = 0;
                    for(var i = 1; i < array.length; i++ ){
                        if( array[index] > array[i]){
                            index = i;
                        }
                    }
                    return index;
            }
            function getCanIgiveSize(proportion,allowRow){
                // if(proportion > 1.20 && proportion < 1.80){}
                    var standart = [
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
                    var newStandart = standart.filter( function(element){
                            return element[1] <= allowRow;
                        }
                    );
                    return newStandart[ getRandomNumber(0, newStandart.length - 1 ) ];
                    
            }
            /* кількість однакових цифр в масиві*/
            function getArrowRow(array,index){
                var count = 1;
                for(var i = index;array[i] === array[i+1] && i < array.length; i++) count++;
                return count;
            }
            function getProporsion(img){
                return (img.naturalWidth / img.naturalHeight).toFixed(3);
            }
            function getRandomNumber(min, max) {
                return Math.floor( Math.random() * (max - min) + min );
            }
            function getLineImg(start,end){
                return start + " / " + (start + end);
            }
         }
    }

}