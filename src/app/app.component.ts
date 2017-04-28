import { Component } from '@angular/core';
import { EspressoRecipe } from './shared';

@Component({
  selector: 'hey-barista-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'heyBarista works!';

  espresso : EspressoRecipe = {
    id: 1,
    date: 'string',
    barista: 'Captain Spaghetticoder',
    name: 'Bug Creator',
    roastery: 'string',
    process: 'string',
    roastdate: 'string',
    dose: 2,
    yield: 3,
    time: 4.6,
    temperature: 5,
    grindsetting: 6,
    flavour: 'string',

  }
}
