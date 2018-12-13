import { Component, OnInit,Input } from '@angular/core';
import { Contacto } from '../../modelos/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  @Input() contactos:Contacto;
  @Input() textSearch:any;
  

  constructor() { }

  ngOnInit() {
   
  }
 

  ngOnChanges(){
  
  }

}
