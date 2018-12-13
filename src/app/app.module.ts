import { routes } from './app.routes';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ContactoService } from './servicios/contacto.service';
import { AvatarService } from './servicios/avatar.service';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, 
         MatCardModule, 
         MatMenuModule, 
         MatToolbarModule, 
         MatIconModule,
         MatFormFieldModule,
         MatSelectModule,
         MatInputModule,
         MatTooltipModule,
         MatProgressBarModule,
         MatListModule
         } from '@angular/material';
import { AgendaComponent } from './agenda/agenda.component';
import { ListadoContactosComponent } from './agenda/listado-contactos/listado-contactos.component';
import { ContactoComponent } from './agenda/listado-contactos/contacto.component';
import { DetalleContactoComponent } from './agenda/detalle-contacto/detalle-contacto.component';
import { AgregarContactoComponent } from './agenda/agregar-contacto/agregar-contacto.component';
import { EditarContactoComponent } from './agenda/editar-contacto/editar-contacto.component';
//import { FilterPipe} from './filter.pipe';
import { FilterPipe} from './newFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    ListadoContactosComponent,
    ContactoComponent,
    DetalleContactoComponent,
    AgregarContactoComponent,
    EditarContactoComponent,
    FilterPipe
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatListModule,
    OrderModule
  ],
  providers: [ ContactoService,AvatarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
