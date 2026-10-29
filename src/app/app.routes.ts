import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { SolicitudDetail } from './pages/solicitud-detail/solicitud-detail';
import { ProjectsList } from './pages/project-list/project-list';
import { SolicitudList } from './pages/solicitud-list/solicitud-list';
import { SolicitudForm } from './pages/solicitud-form/solicitud-form';

export const routes: Routes = [

    /// RUTAS DE PROYECTOS

    {
        path: '', component: Home
    },

    {
        path: 'proyectos/:id', component: ProjectDetail
    },

    {
        path: 'proyectos', component:ProjectsList
    },

    //----------------------------------------------------------

    /// RUTAS DE SOLICITUDES 

    
/// RUTAS DE SOLICITUDES

    {
    path: 'solicitudes/form/:id',
    component: SolicitudForm
    },

    {
    path: 'solicitudes/form',
    component: SolicitudForm
    },

    {
    path: 'solicitudes/:id',
    component: SolicitudDetail
    },

    {
    path: 'solicitudes',
    component: SolicitudList
    }

    

];
