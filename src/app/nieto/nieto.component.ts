import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {
  @Output() contadorNietoReset = new EventEmitter<number>();
  @Input() contador: number;
  reset: number;
  constructor() { }

  ngOnInit(): void {
  }
  resetButton(){
    this.reset = this.contador = 0;
    this.contadorNietoReset.emit(this.reset);
  }
}
