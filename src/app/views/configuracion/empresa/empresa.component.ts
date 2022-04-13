import { Component, OnInit } from '@angular/core';

import { ApiService, IAPICore } from 'src/app/services/apicore/api.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})


export class EmpresaComponent implements OnInit {

  public contenido : string = ''

  public tipo = 'E'

  public buscar = ''



  public activo : boolean = false

  public empregistrar : boolean = false
  public vehiculo : boolean = false


  public xAPI : IAPICore = {
    funcion: '',
    parametros: '',
    valores : ''
  };



  constructor(private apiService: ApiService ) { }

  ngOnInit(): void {
  }


  consultar(){
    this.activo = true
    this.xAPI.parametros = this.buscar
      this.xAPI.valores = ''
    if ( this.tipo == 'E' ) {
      this.xAPI.funcion = 'INFI_CEmpresa'
      this.consultarEmpresa()
    }else{
      this.xAPI.funcion = 'INFI_CVehiculo'  
      this.consultarVehiculo()
    }

  }

  consultarEmpresa(){
    this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        console.log(data)
        this.contenido = ` <table class="table table-striped table-hover" style="width:100%">
        <thead>
        <tr>
          <th scope="col">Razon Social</th>
          <th scope="col">Nombre de la Empresa</th>
          <th scope="col">Numero de Cuenta </th>
          <th scope="col">Siglas</th>
          <th scope="col">Estatus</th>
          <th scope="col">Acciones</th>
        </tr>
        </thead>
        <tbody>`

        data.Cuerpo.forEach(e => {
          this.contenido += ` 
          <tr>
            <td>${e.EMPRES_RIF}</td>
            <td>${e.EMPRES_NOMBRE}</td>
            <td>${e.EMPRES_CUENTA}</td>
            <td>${e.EMPRES_SIGLAS}</td>
            <td>${e.EMPRES_STATUS}</td>
            <td><i class="fas fa-edit iconEdit" (click)="open(content)"></i></td>
          </tr>`
        });
        this.contenido += ` </tbody></table>`
      },
      (error) => { 
        console.error(error) 
      }
    )
  }

  consultarVehiculo(){

    this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        this.contenido = ` <table class="table table-striped table-hover" style="width:100%">
        <thead>
        <tr>
          <th scope="col">Razon Social</th>
          <th scope="col">Nombre de la Empresa</th>
          <th scope="col">Numero de Cuenta </th>
          <th scope="col">Siglas</th>
          <th scope="col">Nuemero BCV</th>
          <th scope="col">Acciones</th>
        </tr>
        </thead>
        <tbody>`

        data.Cuerpo.forEach(e => {
          this.contenido += ` 
          <tr>
            <td>${e.VEHICU_RIF}</td>
            <td>${e.VEHICU_NOMBRE}</td>
            <td>${e.VEHICU_NUMERO_CUENTA}</td>
            <td>${e.VEHICU_SIGLAS}</td>
            <td>${e.VEHICU_NUMERO_CUENTA_BCV}</td>
            <td><i class="fas fa-edit iconEdit" (click)="open(content)"></i></td>
          </tr>`
        });
        this.contenido += ` </tbody></table>`
      },
      (error) => { 
        console.error(error) 
      }
    )
  }

  agregar(){
    this.activo = false
    if ( this.tipo == 'E' ) {
      this.empregistrar = true
      this.vehiculo = false
    }else{
      this.empregistrar = false
      this.vehiculo = true
    }
  }

  
}
