import { Component, OnInit } from '@angular/core';
import { ApiService, IAPICore } from 'src/app/services/apicore/api.service';


interface ICampoDinamico {
  identificador : string
  nombre  : string
  descripcion  : string
  clasificacion  : string
  formato  : string
  funcion  : string
}

@Component({
  selector: 'app-cmpregistrar',
  templateUrl: './cmpregistrar.component.html',
  styleUrls: ['./cmpregistrar.component.scss']
})
export class CmpregistrarComponent implements OnInit {

  public lstVisible : boolean = false

  public Dinamico : ICampoDinamico = {
    identificador: '',
    nombre: '',
    descripcion: '0',
    clasificacion: '0',
    formato: '',
    funcion: ''
  }

  public xAPI : IAPICore = {
    funcion : '',
    parametros : '',
    valores : ''
  }


  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
  }

 

  aceptar(){
    this.Dinamico.identificador = 'NULL'

    this.xAPI.funcion = 'WKF_ICamposDinamicos'
    this.xAPI.valores = JSON.stringify(this.Dinamico)
    
    console.log(JSON.stringify(this.Dinamico))

    this.apiService.Ejecutar(this.xAPI).subscribe(
      data => {
        console.info(data)
      }, 
      error => {
        console.error('GDoc.CamposDinamicos: ', error)
      }
    )

  }
  asociarLista(){
    
    this.lstVisible = true

  }
}
