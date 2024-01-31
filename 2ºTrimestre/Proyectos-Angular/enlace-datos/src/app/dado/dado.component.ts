import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent implements OnInit{

  @Input() valor: string = this.randomNumber();
  @Output() propagar: EventEmitter<string> = new EventEmitter<string>();

  randomNumber() : string {
    let numR: number = Math.floor(Math.random() * 6) + 1;

    return numR.toString();
  }

  ngOnInit(): void {
    this.propagar.emit(this.valor);
  }

}
