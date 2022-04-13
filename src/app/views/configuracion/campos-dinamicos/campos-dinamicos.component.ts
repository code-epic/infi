import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService, IAPICore } from 'src/app/services/apicore/api.service';

@Component({
  selector: 'app-campos-dinamicos',
  templateUrl: './campos-dinamicos.component.html',
  styleUrls: ['./campos-dinamicos.component.scss']
})
export class CamposDinamicosComponent implements OnInit {

  public registrar : boolean = false

  public buscar : string = ''
  public xAPI : IAPICore = {
    funcion : '',
    valores : '',
    parametros : ''
  }
  public lstCampos = []

  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private apiService : ApiService) {
    // customize default values of modals used by this component treee
    config.backdrop = 'static';
    config.keyboard = false;
    
  }


  ngOnInit(): void {
  }



  open(content) {
    this.modalService.open(content);
    
  }

  frm(){
    this.registrar = !this.registrar
  }

   consultar(){
    this.xAPI.funcion = 'WKF_CCamposDinamicos'
    this.xAPI.parametros =  this.buscar
    this.xAPI.valores = ''

    this.apiService.Ejecutar(this.xAPI).subscribe(
      data => {
        console.info(data)
        this.lstCampos = data.Cuerpo
      }, 
      error => {
        console.error('GDoc.CCamposDinamicos: ', error)
      }
    )
  }



}
