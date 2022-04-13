import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal,NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ApiService, IAPICore } from 'src/app/services/apicore/api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})

export class DocumentosComponent implements OnInit {

  title = 'Documentos';
  fechaDesde : NgbDateStruct;
  fechaHasta : NgbDateStruct;
  placement = 'bottom';

  transacciones = []

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  public xApi : IAPICore = {
    funcion : '',
    parametros: ''
  }
  constructor(config: NgbModalConfig, 
    private modalService: NgbModal,
    private apiService : ApiService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    
  }

  ngOnInit(): void {
    this.xApi.funcion = 'C_Transacciones'
    this.apiService.Ejecutar(this.xApi).subscribe(
      (data) => {
        this.transacciones = data.Cuerpo
      },
      (error) => {
        console.info('No existen transacciones registradas')
      }
    )
  }

  open(content) {
    this.modalService.open(content);
    
  }

  modficar(content){
    const modalRef = this.modalService.open(content, { size: 'xl', backdrop: 'static' });
  }

  observation(content){
    this.modalService.open(content);
  }
  add(content){
    const modalRef = this.modalService.open(content, { size: 'xl', backdrop: 'static' });
  }

  tipoDocumentos(xvalor){
     console.log(xvalor);
     
  }
  document(this){
    var files = this.files;
    var nombre= this.value;
	 
    
    console.log("nombre "+nombre);
  }


}
