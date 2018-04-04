import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  state = { error: null };
  items = ['Apple', 'Banana', 'Strawberry'];
  newItem = '';
  onAddItem = () => {
    if (this.newItem) {
      this.items.push(this.newItem);
      this.newItem = '';
    } else {
      this.state.error = 'Must put an item';
    }
  };

  ngOnInit() {}
}
