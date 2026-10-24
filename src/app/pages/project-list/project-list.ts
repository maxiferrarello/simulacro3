import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project-service';

@Component({
  imports: [RouterModule],
  selector: 'app-project-list',
  styleUrl: './project-list.css',
  templateUrl: './project-list.html',
})
export class ProjectsList implements OnInit {

  projects = signal<Project[]>([]);

  constructor(private projectService : ProjectService){}

  ngOnInit(): void {
    this.loadProyectos()
  }


  loadProyectos()
  {
    this.projectService.getProyectos().subscribe(data => {this.projects.set(data)})
  }

  deleteProyecto(id: string)
  {
    this.projectService.deleteProyecto(id).subscribe({
      next: () => {alert("El proyecto fue eliminado correctamente!")},
      error: (e) => {alert("ERROR AL ELIMINAR EL PROYECTO!"),console.log(e);
      }

    })
  }


}
