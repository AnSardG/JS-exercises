import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit{

  @Output() search = new EventEmitter<string>();

  searchValue: string = '';

  constructor() { }

  ngOnInit(): void {    
  }

  onKeyUp(): void {
    this.search.emit(this.searchValue);
  }

}
