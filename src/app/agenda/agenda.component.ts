import { Component, Input, Output,OnInit } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  otroTema:boolean=false;
 
  constructor() {
   
   }

  ngOnInit() {
  
     
   
  }
  
  cambiarTema(){
    this.otroTema=!this.otroTema;
     var element=$('.mat-toolbar.mat-primary');
     var x = $(element).css('backgroundColor');
     if(x=='rgb(30, 136, 229)'){
      
        x='#ffeb3b';
     }else{
      
       x='rgb(30, 136, 229)';
     }
    $('body').find('.letraEncabezado').css('background',x);

  }
}
