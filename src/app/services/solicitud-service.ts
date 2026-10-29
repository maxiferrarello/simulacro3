import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Solicitud } from "../models/solicitud";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SolicitudService {


    private http : HttpClient = inject(HttpClient)

    readonly API_URL = "http://localhost:3001/solicitudes"


    getSolicitudes():Observable<Solicitud[]>
    {
        return this.http.get<Solicitud[]>(this.API_URL)
    }

    getSolicitud(id: string): Observable<Solicitud>
    {
        return this.http.get<Solicitud>(`${this.API_URL}/${id}`)
    }


    updateSolicitud(soli : Solicitud):Observable<Solicitud>
    {
        return this.http.put<Solicitud>(`${this.API_URL}/${soli.id}`,soli)
    }


    addSolicitud(soli : Solicitud):Observable<Solicitud>
    {
        return this.http.post<Solicitud>(this.API_URL,soli)
    }

    
    deleteSolicitud(id: string):Observable<void>
    {
        return this.http.delete<void>(`${this.API_URL}/${id}`)
    }


}
