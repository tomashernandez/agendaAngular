import { Injectable, Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], term): any {
        console.log(term);
        return term 
            ? items.filter(item => item.nombre.indexOf(term) !== -1)
            : items;
    }
}