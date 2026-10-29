import { Component, OnInit, signal } from '@angular/core';
import { Solicitud } from '../../models/solicitud';
import { SolicitudService } from '../../services/solicitud-service';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-solicitud-list',
  styleUrl: './solicitud-list.css',
  templateUrl: './solicitud-list.html',
})
export class SolicitudList implements OnInit {


  solicitudes = signal<Solicitud[]>([])

  constructor(private solicitudService : SolicitudService){}

  ngOnInit(): void {
    this.loadSolicitudes()
  }


  loadSolicitudes()
  {
    this.solicitudService.getSolicitudes().subscribe(data => this.solicitudes.set(data))
  }


  

}
