import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { SolicitudDetail } from './pages/solicitud-detail/solicitud-detail';
import { ProjectsList } from './pages/project-list/project-list';
import { SolicitudList } from './pages/solicitud-list/solicitud-list';
import { ProjectForm } from './pages/project-form/project-form';
import { SolicitudForm } from './pages/solicitud-form/solicitud-form';

export const routes: Routes = [
    {
        path: '', component: Home
    },

    {
        path: 'proyectos/:id', component: ProjectDetail
    },

    {
        path: 'proyectos', component:ProjectsList
    },

    {
        path: 'proyecto/Form', component: ProjectForm 
    },

    {
        path: 'solicitudes', component: SolicitudList
    },

    {
        path: 'solicitudes/:id', component: SolicitudDetail
    },

    {
        path: 'solicitudes/form', component: SolicitudForm
    }
    

];
