import { Component } from '@angular/core';
import { EspressoRecipe } from './shared';

const ESPRESSORECIPES: EspressoRecipe[] = [
{
    id: 1,
    date: 'string',
    barista: 'Captain Spaghetticoder',
    name: 'Mahembe',
    roastery: 'The Barn',

    process: 'Washed',
    roastdate: 'string',
    dose: 2,
    yield: 3,
    time: 4.6,
    temperature: 5,
    grindsetting: 6,
    flavour: 'Cocoa Nibs, Cherry, Nutmeg'
  },
  {
    id: 2,
    date: 'string',
    barista: 'Captain Spaghetticoder',
    name: 'Mahembe',
    roastery: 'The Barn',

    process: 'Washed',
    roastdate: 'string',
    dose: 2,
    yield: 3,
    time: 4.6,
    temperature: 5,
    grindsetting: 6,
    flavour: 'Cocoa Nibs, Cherry, Nutmeg'
  },
  {
    id: 3,
    date: 'string',
    barista: 'Captain Spaghetticoder',
    name: 'Mahembe',
    roastery: 'The Barn',

    process: 'Washed',
    roastdate: 'string',
    dose: 2,
    yield: 3,
    time: 4.6,
    temperature: 5,
    grindsetting: 6,
    flavour: 'Cocoa Nibs, Cherry, Nutmeg'
  }

];


@Component({
  selector: 'hey-barista-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'heyBarista works!';
  espressoRecipes = ESPRESSORECIPES;
  espressoRecipe: EspressoRecipe;

onSelect(espressoRecipe: EspressoRecipe): void {
    this.espressoRecipe = espressoRecipe;
}


}
