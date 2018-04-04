import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  @Output() sideChosen = new EventEmitter<{ name: string; side: string }>();
  constructor() {}

  ngOnInit() {}

  onSideClick(side) {
    // this.character.side = side;
    this.sideChosen.emit({ name: this.character.name, side });
  }
}
