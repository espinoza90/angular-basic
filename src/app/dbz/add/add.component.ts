import { Character } from './../interfaces/dbz.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {
  //  @Input()
  new: Character = {
    name: '',
    power: 0
  }

  //@Output() onCharacterAdd: EventEmitter<Character> = new EventEmitter();

  constructor(private dbzService: DbzService) {

  }

  add() {
    if (!this.new.name.trim()) {
      return;
    }

    this.dbzService.addCharacter(this.new);
    this.new = { name: '', power: 0 };
  }
}
