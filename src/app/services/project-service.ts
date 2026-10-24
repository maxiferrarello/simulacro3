import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "../models/project";

@Injectable({
    providedIn: 'root'
})

export class ProjectService {

    private http : HttpClient = inject(HttpClient)
    readonly API_URL = 'http://localhost:3000/proyectos'


    // metodo gets
    getProyectos():Observable<Project[]>
    {
        return this.http.get<Project[]>(this.API_URL);
    }

    getProyecto(id:string):Observable<Project>
    {
        return this.http.get<Project>(`${this.API_URL}/${id}`)
    }

    /// metodo put

    updateProyecto(project : Project):Observable<Project>
    {
        return this.http.put<Project>(`${this.API_URL}/${project.id}`,project)
    }


    /// metodo post

    postProyecto(project : Project):Observable<Project>
    {
        return this.http.post<Project>(this.API_URL,project)
    }

    
    /// metodo delete

    deleteProyecto(id : string): Observable<void>
    {
        return this.http.delete<void>(`${this.API_URL}/${id}`)
    }


}
