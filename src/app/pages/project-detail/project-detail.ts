import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [CommonModule],
  selector: 'app-project-detail',
  styleUrl: './project-detail.css',
  templateUrl: './project-detail.html',
})
export class ProjectDetail implements OnInit {

  project = signal<Project | undefined>(undefined)

  constructor(private projectService : ProjectService, private route : ActivatedRoute){}


  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.projectService.getProyecto(id).subscribe(data => {
      this.project.set(data)
    })
  }


}
