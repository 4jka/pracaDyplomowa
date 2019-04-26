
function setSearchBarPlace(){

    var criteriaForRequest = {};
    var ul = document.querySelector('.listSearch');

    document.querySelector('.searchField').onkeyup = function(event) {
 
        if (event.which == 13 || event.keyCode == 13) {
                request();
                return;
        }

        /* Удаляємо завжди все,коли є пусто то не має сенсу це посилати на сервер */
        ul.innerHTML = "";
        if(this.value == "") return;

        /* Шукаємо в таблицях ті обєкти які сходяться з тим що написано */
        var lista = {};
        getObjectsSearch(city,this.value,'city');
        getObjectsSearch(category,this.value,'category');
        function getObjectsSearch(tableSearch,strSearch,nameTable){
            for(key in tableSearch){
                if(tableSearch[key].name.toLowerCase().indexOf(strSearch.toLowerCase()) == 0){
                    lista[tableSearch[key].id] = tableSearch[key];
                    lista[tableSearch[key].id].nameTable = nameTable;
                }
            }
        }

        /* Створюємо список на основі вибранних записей */        
        for(key in lista){
            var li = document.createElement('li');
            li.className = "list-item"; 
            li.idPlace = key;
            li.nameTable = lista[key].nameTable;
            li.appendChild( document.createTextNode(  lista[key].name ) );
            ul.appendChild(li);

            li.onclick = function(){
                var searchField = document.querySelector('.searchField');
                searchField.removeAttribute("placeholder");
                searchField.focus();

                /* Створюємо квадратік вибранного елементу */
                var wrapperSearch = document.querySelector('.wrapperChoosedCryteria');
                var itemCoose = document.createElement('div');
                itemCoose.className = 'choosedCryteria';
                var icon = document.createElement('i');
                icon.className = 'fas fa-times closeChoosedCryteria';
                var span = document.createElement('span');
                span.appendChild(  document.createTextNode( getNameOfTable(this.nameTable,this.idPlace) ));
                itemCoose.appendChild(span);
                itemCoose.appendChild(icon);
                wrapperSearch.appendChild(itemCoose);

                criteriaForRequest[Object.keys(criteriaForRequest).length + 1] = {
                    index: this.idPlace,
                    nameTable: this.nameTable
                }

                /* все очищаємо коли щось вибрали*/
           
                ul.innerHTML = "";
                searchField.value = "";

                function getNameOfTable(table,index){
                    switch(table){
                        case 'city':
                            return city[index].name;
                        break;
                        case 'category':
                            return category[index].name;
                        break;
                    }
                }

            }//click  
        }

        function request(){
            var needPlaces =  filter(allPlaces,
                function(element){
                    var isTheItemSuitable = true;
                    for(var i = 1;i <= Object.keys(criteriaForRequest).length; i++){
                        switch(criteriaForRequest[i].nameTable){
                            case 'city':
                                if(parseInt(criteriaForRequest[i].index) !== element.city){
                                    isTheItemSuitable = false;
                                }
                            break;
                            case 'category':
                                var categoryForRequest = false;
                                for(var j = 0; j < element.category.length; j++){
                                    if(parseInt(criteriaForRequest[i].index) === element.category[j]) categoryForRequest = true;
                                }
                                if(categoryForRequest !== true){ isTheItemSuitable = false };
                            break;
                            }
                        }
                    if( isTheItemSuitable === true ){ return element; }    
                }
            );
                
            hScroll.setZeroScroll();
            soldierBee.clearImages();
            soldierBee.addImages(needPlaces);
    
            function filter(objects,test){
                var search = {};
                for(key in objects){
                    if(test(objects[key])){ search[Object.keys(search).length] = objects[key]; } 
                }
                return search;
            }
        }//request
    };
}