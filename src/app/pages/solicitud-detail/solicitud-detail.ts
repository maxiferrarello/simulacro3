import { Component, OnInit, signal } from '@angular/core';
import { Solicitud } from '../../models/solicitud';
import { SolicitudService } from '../../services/solicitud-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-solicitud-detail',
  styleUrl: './solicitud-detail.css',
  templateUrl: './solicitud-detail.html',
})
export class SolicitudDetail implements OnInit {

  solicitud = signal<Solicitud | undefined>(undefined)

  constructor(private soliService : SolicitudService, private route: ActivatedRoute, private router : Router){}

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');

  if (id !== null) {
    this.soliService.getSolicitud(id).subscribe({
      next: (data) => {
        this.solicitud.set(data);
      },
      error: (e) => console.log('Error al cargar la solicitud:', e)
    });
  }
}


  eliminarSolicitud(): void {
  const id = this.solicitud()?.id;

  if (id === undefined) {
  return;
  }

  if (confirm("¿Estás seguro de que querés eliminar esta solicitud?")) {
  this.soliService.deleteSolicitud(id).subscribe({

    next: () => {
      alert("Solicitud eliminada correctamente.");
      this.router.navigate(['/solicitudes']);
    },
    error: (e) => {
      alert("Error al eliminar la solicitud.");
      console.log(e);
    }
  });
}

}




}
