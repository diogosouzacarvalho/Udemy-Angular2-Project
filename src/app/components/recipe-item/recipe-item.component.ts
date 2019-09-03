import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
    @Input() recipe: Recipe;
    // @Output() recipeSelected = new EventEmitter<void>();

    constructor(private recipeService: RecipeService) {}

    onSelected() {
        // this.recipeSelected.emit();
        this.recipeService.recipeSelected.emit(this.recipe);
    }
}
