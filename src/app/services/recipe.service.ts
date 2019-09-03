import { Recipe } from 'src/app/models/recipe';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', 'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Tomato', 3), new Ingredient('Bread', 5)]
    ),
    new Recipe(
      'Another Test Recipe', 'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Pasta', 10), new Ingredient('Tomato', 3), new Ingredient('Olives', 5)]
    ),
    new Recipe(
      'Other Test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Apple', 2), new Ingredient('Banana', 3)]
    ),
    new Recipe(
      'Again.. Test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Tuna', 2), new Ingredient('Mushromm', 7)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
