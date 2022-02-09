import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {

  emisionDesde : NgbDateStruct;
  emisionHasta : NgbDateStruct;
  vencimientoDesde :NgbDateStruct;
  vencimientoHasta : NgbDateStruct;
  
  placement = 'bottom';

  constructor() { }

  ngOnInit(): void {
  }

}
