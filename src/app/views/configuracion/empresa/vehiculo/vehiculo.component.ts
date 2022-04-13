import { Component, OnInit } from '@angular/core';
import { ApiService, IAPICore } from 'src/app/services/apicore/api.service';
interface IVehiculo {
  ID : string,
  nombre : string,
  rif : string,
  siglas : string,
  branch : string,
  cuenta : string,
  cuentabcv : string 
} 
@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent implements OnInit {
  public tipoPersona = 'J'
  
  public xAPI : IAPICore = {
    funcion: '',
    parametros: '',
    valores : ''
  };


  public Vehiculo : IVehiculo = {
    ID: '',
    nombre: '',
    rif: '',
    siglas: '',
    branch : '',
    cuenta: '',
    cuentabcv: ''
  } 

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  aceptar(){
    this.xAPI.funcion = 'INFI_IVehiculo'

    this.xAPI.parametros = ''
    this.Vehiculo.ID = '100'
    this.Vehiculo.rif = this.tipoPersona + '-' + this.Vehiculo.rif
    
    this.xAPI.valores = JSON.stringify(this.Vehiculo)
    this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        console.log(data)        
      },
      (error) => { 
        console.error(error) 
      }
    )
      

  }
}
