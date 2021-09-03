import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
})
export class HeroesListComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];

  deletedHero: string = '';

  constructor() { }

  deleteHero() {
    this.deletedHero = this.heroes.pop() || '';

  }
}
