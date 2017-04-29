import { TestBed, inject } from '@angular/core/testing';

import { EspressoRecipeService } from './espresso-recipe.service';

describe('EspressoRecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EspressoRecipeService]
    });
  });

  it('should ...', inject([EspressoRecipeService], (service: EspressoRecipeService) => {
    expect(service).toBeTruthy();
  }));
});
