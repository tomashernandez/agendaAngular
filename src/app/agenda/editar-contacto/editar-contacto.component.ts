import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactoService } from '../../servicios/contacto.service';
import { Contacto } from '../../modelos/contacto';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.component.html',
  styleUrls: ['./editar-contacto.component.css']
})
export class EditarContactoComponent implements OnInit {
  id:any;
  params:any;
  contacto = new Contacto('id','nombre','sexo','apellidoPaterno','apellidoMaterno','telefono','email','fotoLink');
  fotoLinkExterno:any;
  constructor(private activatedRoute:ActivatedRoute,private _contacto:ContactoService,private router:Router) { }

  ngOnInit() {
    this.params=this.activatedRoute.params.subscribe(params=>this.id=params['id']);
    this._contacto.obtenerContacto(this.id).subscribe(
      data=>{
        this.contacto.nombre=data['nombre'];
        this.contacto.sexo=data['sexo'];
        this.contacto.apellidoPaterno=data['apellidoPaterno'];
        this.contacto.apellidoMaterno=data['apellidoMaterno'];
        this.contacto.telefono=data['telefono'];
        this.contacto.email=data['email'];
        this.contacto.fotoLink=data['fotoLink'];
        this.contacto.id=data['id'];
        this.fotoLinkExterno=data['fotoLink'];
      }
      ,error=>console.log(<any>error)
    );
    
  }

  updateContact(contacto){
    this._contacto.actualizarContacto(contacto)
      .subscribe(
        contacto=>this.router.navigate(['/agenda/']),
        error=>console.log(<any>error)
      );
    /*this._.updateImage(image)
        .subscribe(
          image => this.router.navigate(['/admin/images']),
          error => console.log(<any>error)
        );*/
  }

  ngOnDestroy(){
    this.params.unsubscribe();
  }

}
