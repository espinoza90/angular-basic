import { DbzService } from './../services/dbz.service';
import { Character } from './../interfaces/dbz.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {

  get characters() {
    return this.dbzService.characters;
  }

  constructor(private dbzService: DbzService) {

  }
}
