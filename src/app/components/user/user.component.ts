import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  rootItems = ['Apples', 'Oranges', 'Bananas'];

  @Input() name = 'Me';
  @Output() nameChanged = new EventEmitter<string>();
  onUserInput({ target: { value } }) {
    this.nameChanged.emit(value);
  }
  onItemWasAdded(item) {
    this.rootItems.push(item);
    console.log(this.rootItems);
  }
}
