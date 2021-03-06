import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  @Input() contador: number;
  @Output() contadorHijo = new EventEmitter<number>();
  constructor() { }
  ngOnInit(): void {}
  multiplicar(){
    this.contador *= 2;
    this.contadorHijo.emit(this.contador)
  }
  dividir(){
    this.contador /= 2;
    this.contadorHijo.emit(this.contador)
  }
}
