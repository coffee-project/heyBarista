import { Component, OnInit } from '@angular/core';
import { EspressoRecipe, EspressoRecipeService } from './../shared';

@Component({
  selector: 'hey-barista-espresso-journal',
  templateUrl: './espresso-journal.component.html',
  styleUrls: ['./espresso-journal.component.scss'],
  providers: [EspressoRecipeService]
})
export class EspressoJournalComponent implements OnInit {

  espressoRecipe: EspressoRecipe;
  espressoRecipes: EspressoRecipe[];
  constructor(private espressoRecipeService: EspressoRecipeService) { }

  ngOnInit(): void {
    this.espressoRecipes = this.espressoRecipeService.getEspressoRecipes();
  }
  onSelect(espressoRecipe: EspressoRecipe): void {
    this.espressoRecipe = espressoRecipe;
}

}
