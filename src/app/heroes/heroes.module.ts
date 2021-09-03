import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroComponent } from './hero/hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeroComponent,
        HeroesListComponent
    ],
    exports: [
        HeroesListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}