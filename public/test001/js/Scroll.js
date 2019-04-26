/* Scroll Event */
var hScroll = new hScroll();
hScroll.setElementForScroll('#containerGridPlaces');

function hScroll(){
    this.scrollValue;
    this.element;

    this.setElementForScroll = function(selector){
        this.scrollValue = 0;
        this.element = document.querySelector(selector);
    };
    this.setZeroScroll = function(){
        this.scrollValue = 0;
        this.element.style.right = "0px";
    }
    this.scroll = scroll.bind(this);
    function scroll( event){
        var delta = -getDelta(event) * 35;
        if(this.scrollValue + delta >= 0){
            if(this.element.getBoundingClientRect().right - delta < this.element.parentNode.getBoundingClientRect().width) return;
            this.element.style.right = (this.scrollValue += delta) + "px";
        }
        return;
    };
 }



 var infoPhotoScroll = vScroll('.columnPhotoSP');
 var photoColumnCategory = vScroll('.photoColumnCategory');
 var descriptionScroll = vScroll('.descriptionPlace');

 function vScroll(selector){ 
    var scroll = 0;
    var element = document.querySelector(selector);
    
    return function( event){ 
        var delta = getDelta(event) * 35;
        if(scroll + delta <= 0){
            if(element.getBoundingClientRect().bottom + delta < element.parentNode.getBoundingClientRect().height) return;
            element.style.top = (scroll += delta) + "px";
        }
        return;
    }
 };


function getDelta(event){
    var delta; // Направление колёсика мыши
    event = event || window.event;
    if (event.wheelDelta) { // В Opera и IE
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta; // В Опере значение wheelDelta такое же, но с противоположным знаком
    }
    else if (event.detail) { // Для Gecko
        delta = -event.detail / 3;
    }
    // Запрещаем обработку события браузером по умолчанию
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
    return delta;
}

function setScroll(element,func){
        // Добавляем обработчики для разных браузеров
        setEvent(element, 'DOMMouseScroll', func);
        setEvent(element, 'mousewheel', func);
}
function removeScroll(element,func){
        // Добавляем обработчики для разных браузеров
        removeEvent(element, 'DOMMouseScroll',  func);
        removeEvent(element, 'mousewheel', func);
}

function setEvent(element, event, func){
    // Функция для добавления обработчика событий
    if (element.addEventListener) {
        element.addEventListener(event, func, false);
    }
     else if (element.attachEvent) {
        element.attachEvent('on' + event, func);
    }
}
function removeEvent(element, event, func){
    // Функция для добавления обработчика событий
    if (element.addEventListener) {
        element.removeEventListener(event, func, false);
    }
     else if (element.attachEvent) {
        element.detachEvent('on' + event, func);
    }
}