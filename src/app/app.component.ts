import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contador: number = 0
  constructor() { }
  sumaButton(){
    this.contador += 10;
  }
  restaButton(){
    this.contador -= 10;
  }
}
