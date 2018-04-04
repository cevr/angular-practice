import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];
  constructor() {}
  state = {
    chosenList: 'all'
  };

  ngOnInit() {}

  getCharacters() {
    if (this.state.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter(char => {
      return char.side === this.state.chosenList;
    });
  }
  onSideChanged(info) {
    const pos = this.characters.findIndex(char => char.name === info.name);
    this.characters[pos].side = info.side;
  }
  onChoose(opt) {
    this.state.chosenList = opt;
  }
}
