import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService, IAPICore } from 'src/app/services/apicore/api.service';

@Component({
  selector: 'app-blotters',
  templateUrl: './blotters.component.html',
  styleUrls: ['./blotters.component.scss']
})
export class BlottersComponent implements OnInit {

  
  buscar = ''
  public registrar : boolean = true
  lstLista = []

  public xAPI : IAPICore = {
    funcion: '',
    parametros: '',
    valores : ''
  };

  constructor(
    config: NgbModalConfig, 
    private modalService: NgbModal, 
    private apiService: ApiService) {
   
    config.backdrop = 'static';
    config.keyboard = false;
    
  }

  ngOnInit(): void {
    this.consultar()
  }

  open(content) {
    this.modalService.open(content);
    
  }

  modficar(content){
    const modalRef = this.modalService.open(content, { size: 'xl', backdrop: 'static' });
  }

  frm(){
    this.registrar = !this.registrar
  } 

  consultar(){
    this.registrar = true
    this.xAPI.parametros = ''
    this.xAPI.valores = ''
    this.xAPI.funcion = 'INFI_CBloter'
    this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        console.info(data)
        this.lstLista = data.Cuerpo
      },
      (error) => { 
        console.error(error) 
      }
    )
  }





}
