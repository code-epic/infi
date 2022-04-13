import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbDateStruct, NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bltregistrar',
  templateUrl: './bltregistrar.component.html',
  styleUrls: ['./bltregistrar.component.scss']
})
export class BltregistrarComponent implements OnInit {
  meridian = true

  public hdesde = { hour: 13, minute: 30 }
  public hhasta = { hour: 14, minute: 30 }
  public hvdesde = { hour: 12, minute: 30 }
  public hvhasta = { hour: 13, minute: 30 }

  public fdesde : any 
  public fhasta : any

  public fdesdeDate : NgbDate | null 
  public fhastaDate : NgbDate | null
 
  placement = 'bottom';

  constructor( public formatter: NgbDateParserFormatter) { }

  ngOnInit(): void {

  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }



}
