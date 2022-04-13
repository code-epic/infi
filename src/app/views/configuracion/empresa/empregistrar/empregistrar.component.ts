import { Component, OnInit } from '@angular/core';
import { ApiService, IAPICore } from 'src/app/services/apicore/api.service';



interface IEmpresa {
  ID : string,
  nombre : string,
  rif : string,
  emisor : number,
  depositario : number,
  email : string,
  estatus : number,
  siglas : string,
  cuenta : string 
} 

@Component({
  selector: 'app-empregistrar',
  templateUrl: './empregistrar.component.html',
  styleUrls: ['./empregistrar.component.scss']
})
export class EmpregistrarComponent implements OnInit {

  public tipoPersona = 'J'
  
  public xAPI : IAPICore = {
    funcion: '',
    parametros: '',
    valores : ''
  };


  public Empresa : IEmpresa = {
    ID: '',
    nombre: '',
    rif: '',
    emisor: 0,
    depositario: 0,
    email: '',
    estatus: 0,
    siglas: '',
    cuenta: ''
  } 

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }


  aceptar(){
    this.xAPI.funcion = 'INFI_IEmpresa'

    this.xAPI.parametros = ''
    this.Empresa.ID = '100'
    this.Empresa.rif = this.tipoPersona + '-' + this.Empresa.rif
    
    this.xAPI.valores = JSON.stringify(this.Empresa)
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
