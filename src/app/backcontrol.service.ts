import { Injectable } from '@angular/core';
import { cuerpoRespuesta } from './interface/salida';
import { servidores } from './utilidades/servidores';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export  class BackcontrolService {


  constructor(
    public http: HttpClient
  ) { }

  private crearHeader(){
    const cabezal = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'DTSI IS GAH',
    })
    return {cabezal}
  }

  public obtenerVersion() {
    const serv = new servidores()
    const servCtrl = serv.obtenerVersionControl()
    const _header = this.crearHeader()
    return this.http.get<cuerpoRespuesta>(servCtrl,{})
  }

}
