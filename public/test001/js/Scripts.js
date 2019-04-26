window.onload = function(){

    setScroll(window,hScroll.scroll);
    setScroll(document.querySelector('.staticMediaSP'),infoPhotoScroll);
    setScroll(document.querySelector('.staticPhotoCategory'),photoColumnCategory);
    setScroll(document.querySelector('.wrapperStaticDescription'),descriptionScroll);

    routesConfiguration();
    configSearchBlackout();
    setSearchBarPlace();
}




function fillCategorySection(){

    mapCategory.setPlacesOnMapCategory(allPlaces);

    var photo = mapCategory.getAddedPlace();
    var column = document.querySelector('.photoColumnCategory');
    column.innerHTML = '';

    for(var i = 0; i < photo.length; i++){
         var div = document.createElement('div');
        div.className = "photo";
        var image = new Image();
        image.src = 'img/' + allPlaces[photo[i]].allPhoto[0];

        div.appendChild(image);
        column.appendChild(div);
    }
    

}

/* Blackout Search Place*/
function configSearchBlackout(){
    var x;
    var y;
    document.querySelector('body').addEventListener('mousemove',
    function showPosition(event) {      
        x = event.clientX;
        y = event.clientY; 
    }, false); 


    document.querySelector('.searchField').onfocus = function() {
        document.querySelector('.hover-blackout').classList.add('focus');
        document.querySelector('.wrapperSearch').classList.add('focus');
        document.querySelector('.listSearch').classList.add('focus');
    }

    document.querySelector('.searchField').onblur = function(event) {

        var elementMouseIsOver = document.elementFromPoint(x, y);
        if(elementMouseIsOver.className !== 'list-item'){
            document.querySelector('.hover-blackout').classList.remove('focus');
            document.querySelector('.wrapperSearch').classList.remove('focus');
            document.querySelector('.listSearch').classList.remove('focus');
        }
        
    }
}
/* Create Page Place *//* Bee */
function fillSectionSP(infoPlace){

    mapSP.setPlacePosition(infoPlace.lat, infoPlace.lng);
    document.querySelector('.titlePlaceSP').innerHTML = infoPlace.title;
    var div = document.querySelector('.paragraph');
    div.innerHTML = "";
    for(var i = 0; i < infoPlace.paragraph.length; i++){
        var p = document.createElement('p');
        p.innerHTML =  infoPlace.paragraph[i];
        div.appendChild(p);
    }

    fillColumnPhotoSP(infoPlace);
    document.querySelector('.columnVideoSP').innerHTML = infoPlace.video;

    if(mapCategory.hasPlaceDefaultCategory(infoPlace.id)){
        var openCategory = document.querySelector('.iconOpenCategory');
        if(!openCategory.classList.contains('active')) {
            document.querySelector('.plus').classList.remove('active');
            openCategory.classList.add('active');
        }
    }else{
        var plus = document.querySelector('.plus');
        plus.idPlace = infoPlace.id;
        if(!plus.classList.contains('active')){
            document.querySelector('.iconOpenCategory').classList.remove('active');
            plus.classList.add('active');
        }
    }
    
    document.querySelectorAll('span[class^=abstract]').forEach(function(element){
        element.idPlace = element.className.replace(/\D+/g,"");
        element.onclick = function(){ fillColumnPhotoSP( allPlaces[this.idPlace] ); }
    });


    function fillColumnPhotoSP(infoPlace){
        var column = document.querySelector('.columnPhotoSP');
        column.innerHTML = '';

        if(infoPlace.allPhoto !== undefined){
            for(var indexPhoto = 0; indexPhoto < infoPlace.allPhoto.length; indexPhoto++){

                var div = document.createElement('div');
                div.className = "photo";
                var image = new Image();
                image.src = 'img/' + infoPlace.allPhoto[indexPhoto];

                div.appendChild(image);
                column.appendChild(div);
            }
        }
    }            
}


var routes = {
    showCategory: function(){
        if(!document.querySelector('#sectionCategory').classList.contains('active')){
            document.querySelector('#sectionCategory').classList.add('active');
            document.querySelector('#sectionSeparationPlace').classList.remove('active');
            document.querySelector('.sectionGridImg').classList.remove('active');
        }
    },
    showSectionGridImg: function(){
        if(!document.querySelector('.sectionGridImg').classList.contains('active')){
            document.querySelector('#sectionCategory').classList.remove('active');
            document.querySelector('#sectionSeparationPlace').classList.remove('active');
            document.querySelector('.sectionGridImg').classList.add('active');
        }
    },
    showContainerGridImg: function(){
        document.querySelector('.sectionGridImg').classList.add('active');
        document.querySelector('#sectionSeparationPlace').classList.remove('active');
    },
    showSeparatePlace: function(){
        document.querySelector('.sectionGridImg').classList.remove('active');
        document.querySelector('#sectionSeparationPlace').classList.add('active');
    },
    showIconOpenCategory: function(){
        if(!document.querySelector('.iconOpenCategory').classList.contains('active')) {
            document.querySelector('.plus').classList.remove('active');
            document.querySelector('.iconOpenCategory').classList.add('active');
        }
    },
    showMediaSP: function(){
        if(!document.querySelector('.columnVideoSP').classList.contains('active')){
            document.querySelector('.columnVideoSP').classList.add('active');
            document.querySelector('.columnPhotoSP').classList.remove('active');
        }else{
            document.querySelector('.columnVideoSP').classList.remove('active');
            document.querySelector('.columnPhotoSP').classList.add('active');
        }
    }
}
function routesConfiguration(){
    document.querySelector('.switchVideo').onclick = function(){ routes.showMediaSP(); }
    document.querySelector('.homeItem').onclick = function(){ routes.showSectionGridImg(); }
    document.querySelector('.close').onclick = function(){ routes.showContainerGridImg(); }
    document.querySelector('.plus').onclick = function(){
        mapCategory.addPlaceDefaultCategory(this.idPlace);
        routes.showIconOpenCategory();
    }
    document.querySelector('.iconOpenCategory').onclick = function(){
        routes.showCategory();
        fillCategorySection();
    }
    document.querySelector('.categoryItem').onclick = function(){
        routes.showCategory();
        fillCategorySection();
    }
    document.querySelector('.routeIcon').onclick = function(){
        mapCategory.createRoute();
    }
}














