import { Component, OnInit,Input } from '@angular/core';
import { Contacto } from '../../modelos/contacto';
import { ContactoService } from '../../servicios/contacto.service';
import { Observable } from 'rxjs/Observable';

declare var $:any;
@Component({
  selector: 'app-listado-contactos',
  templateUrl: './listado-contactos.component.html',
  styleUrls: ['./listado-contactos.component.css']
})
export class ListadoContactosComponent implements OnInit {
  contactos:Array<Contacto[]>;
  contactoSeleccionado:Contacto;
 

  
  myData:Array<any>;
  aux:Array<any>=[];
  personasOrdenadas: Array<any> =[];
  existeLetra:boolean;
  myDataOriginal:Array<any>;

  constructor(private _contactoService:ContactoService) { }

  ngOnInit() {
    this._contactoService.obtenerContactos().subscribe(res=>{
      if(res.length>0){
        for (var index = 0; index < res.length; index++) {
          var element = res[index];
          if( typeof element.nombre =='string'){
            let inicial=element.nombre[0];
            inicial=inicial.toUpperCase();
            if ( this.aux.indexOf(inicial) == -1) {
              this.aux.push(inicial);
              var obj={'letra':inicial,'contactos':[]};
              var indice=this.personasOrdenadas.push(obj)-1;
              this.personasOrdenadas[indice].contactos.push(element);
            }else{
              for (var j = 0; j < this.personasOrdenadas.length; j++) {
                var letra = this.personasOrdenadas[j]['letra'];
                  if(letra==inicial){
                    this.personasOrdenadas[j].contactos.push(element);
                  }
              }
            }
          }
        }
        this.contactos=this.personasOrdenadas;
        this.myDataOriginal=res;
      
        
      }
    });
  }

  seleccionarContacto(contacto:Contacto){
  
    if(typeof this.contactoSeleccionado== 'object'){
      this.contactoSeleccionado=null;
      this.contactoSeleccionado=contacto;
    }else{
     
      this.contactoSeleccionado=contacto;
    }
   
   
  }

  buscarContacto(valor:string){
    if(valor.length>1){
     console.log(valor);
      var letra=valor[0];
     
          this.myData = this.myDataOriginal.filter(contacto =>  {  
            console.log(contacto.nombre); 
              contacto.nombre.indexOf(valor) > -1
          });
              console.log(this.myData);
       
             // this.contactos=this.myData;
    
     
    }
  }


}
