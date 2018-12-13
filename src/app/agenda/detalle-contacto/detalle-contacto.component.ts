import { Component, OnInit,Input,OnDestroy } from '@angular/core';
import { Contacto } from '../../modelos/contacto';
import { ActivatedRoute } from '@angular/router';
import { ContactoService } from '../../servicios/contacto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.component.html',
  styleUrls: ['./detalle-contacto.component.css']
})
export class DetalleContactoComponent implements OnInit,OnDestroy {
  id:any;
  params:any;
  subscribeDelete:any;
  @Input() contactoSeleccionado:any;

  constructor(private activatedRoute:ActivatedRoute,
              private _contacto:ContactoService,
              private router:Router) { }

  ngOnInit() {
  }

 
  eliminarContacto(contacto){
    console.log(contacto);
 
    this.subscribeDelete=this._contacto.eliminarContacto(contacto)
      .subscribe(
        contacto=>{
          this.contactoSeleccionado=null;
          this.router.navigate(['/agregar'])
          //alert('Contacto Eliminado');
        },
        error=>console.log(<any>error)
    );
  }

  ngOnDestroy(){
    if(this.subscribeDelete){
      this.subscribeDelete.unsubscribe();
    }
    this.contactoSeleccionado='undefined';
  }


  cambiarValor(seleccion){
    this.contactoSeleccionado=null;
  }
}
