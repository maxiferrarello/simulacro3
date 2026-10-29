import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { form, FormField, maxLength, min, minLength, required } from '@angular/forms/signals';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Solicitud } from '../../models/solicitud';
import { SolicitudService } from '../../services/solicitud-service';

@Component({
  imports: [CommonModule, RouterModule, FormField],
  selector: 'app-solicitud-form',
  styleUrl: './solicitud-form.css',
  templateUrl: './solicitud-form.html',
})
export class SolicitudForm implements OnInit {

  solicitudId!:string

  solicitudModel = signal<Solicitud>({
    nombreSolicitante: '',
    email: '',
    tipoProyecto: '',
    descripcion: '',
    presupuesto: 0,
    fecha: ''
  });

  solicitudForm = form(this.solicitudModel, (campo)=>
  {
    required(campo.nombreSolicitante);
    minLength(campo.nombreSolicitante, 2)

    required(campo.descripcion)
    maxLength(campo.descripcion,100)

    required(campo.email)
    required(campo.fecha)
    required(campo.presupuesto)
    min(campo.presupuesto,1)

    required(campo.tipoProyecto)


  })


  constructor(private solicitudService : SolicitudService, private route : ActivatedRoute,private router : Router){}

 ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');

  if (id !== null) {
    this.solicitudId = id;

    this.solicitudService.getSolicitud(id).subscribe({
      next: (data) => {
        this.solicitudModel.set({
          nombreSolicitante: data.nombreSolicitante,
          presupuesto: data.presupuesto,
          email: data.email,
          tipoProyecto: data.tipoProyecto,
          descripcion: data.descripcion,
          fecha: data.fecha
        });
      },
      error: (e) => console.log('Error al cargar solicitud:', e)
    });
  }
}


  onSubmit():void
  {
    const solicitudData = this.solicitudModel()

    if(this.solicitudId)
    {
      const solicitud : Solicitud = {
        id: this.solicitudId,
        ...solicitudData
      }

      this.solicitudService.updateSolicitud(solicitud).subscribe({
        next: () => this.router.navigate(['/solicitudes']),
        error: (e) => console.log(e)     
      })

    }else
    {
      this.solicitudService.addSolicitud(solicitudData).subscribe({
        next: () => {this.router.navigate(['/solicitudes'])},
        error: (e) => console.log(e)
        
      })
    }

  }










}
