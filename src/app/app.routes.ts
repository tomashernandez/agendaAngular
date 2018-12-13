import { Routes,RouterModule } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { AgregarContactoComponent } from './agenda/agregar-contacto/agregar-contacto.component';
import { EditarContactoComponent } from './agenda/editar-contacto/editar-contacto.component';
import { ModuleWithProviders } from '@angular/core';

const appRoutes:Routes=[
    {path:'',redirectTo:'/agenda',pathMatch:'full'},
    {path: 'agenda',component: AgendaComponent },
    {path: 'agregar',component: AgregarContactoComponent },
    {path: 'editar/:id',component: EditarContactoComponent }
];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);