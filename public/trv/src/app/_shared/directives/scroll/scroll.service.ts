import { Injectable } from "@angular/core";

@Injectable()
export class ScrollService{
    
    getDelta(event){
        let delta; // Направление колёсика мыши
        event = event || window.event;
        if (event.wheelDelta) { // В Opera и IE
            delta = event.wheelDelta / 120;
        }
        else if (event.detail) { // Для Gecko
            delta = -event.detail / 3;
        }
        // Запрещаем обработку события браузером по умолчанию
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
        
        return -(delta * 55);
    }
}