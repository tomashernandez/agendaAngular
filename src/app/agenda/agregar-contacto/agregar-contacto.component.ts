import { Component, OnInit,OnDestroy } from '@angular/core';
import { AvatarService } from '../../servicios/avatar.service';
import { ContactoService } from '../../servicios/contacto.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Contacto } from '../../modelos/contacto';
@Component({
  selector: 'app-agregar-contacto',
  templateUrl: './agregar-contacto.component.html',
  styleUrls: ['./agregar-contacto.component.css']
})
export class AgregarContactoComponent implements OnInit {
  avatar:Observable<any[]>;
  avatarResult:any={
    results:[]
  };
  subscribeAvartar:any;
  contacto:Contacto;

  constructor(private _AvatarService:AvatarService,
              private _Contacto:ContactoService,
              private router: Router) {

   }

  ngOnInit() {
  }

  createContact(contacto){
   
   this.subscribeAvartar= this._AvatarService.obtenerAvatar(contacto.sexo).subscribe((obj:any)=>{
        this.avatarResult=obj.results;
        let img=this.avatarResult[0].picture.large;
        if(img!=''){
          this.contacto=contacto;
          this.contacto.fotoLink=img;
          this._Contacto.agregarContacto(this.contacto)
                .subscribe(
                  contacto=>{ console.log(contacto)
                        this.router.navigate(['/agenda/'])          
                  },
                  error=>console.log(<any>error)
                );
        }
      }
    );
  }

  ngOnDestroy(){
    if(this.subscribeAvartar){
      this.subscribeAvartar.unsubscribe();
    }
    
  }
}
