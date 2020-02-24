import React, {Component} from 'react';

import Recipe from './Recipe';
import Recipes from './Recipes';
import {Router} from "@reach/router";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            recipes: [
                {
                    id: 0,
                    title: "Pizza 1",
                    desc: "Classic Hawaii",
                    ingredients: ["Pineapple", "Ham"],
                    cookingTime: 20
                },
                {
                    id: 1,
                    title: "Pizza 2",
                    desc: "New York style - Cheese, More Cheese",
                    ingredients: ["Mozzarella", "Cheddar"],
                    cookingTime: 15
                },
                {
                    id: 2,
                    title: "Pizza 3",
                    desc: "Italian Style",
                    ingredients: ["Serano", "Rocula", "parmesan cheese"],
                    cookingTime: 25
                },
                {
                    id: 3,
                    title: "Pizza 4",
                    desc: "Meatlover",
                    ingredients: ["Mushrooms","Whatever meat you have. Important! You cant put on too much", "Even more meat"],
                    cookingTime: 30
                },
                {
                    id: 4,
                    title: "Pizza 5",
                    desc: "Veggie",
                    ingredients: ["Mushrooms","Bellpepper", "Pineapple"],
                    cookingTime: 15
                }
            ]
        }

    }

    getRecipe(id) {
        return this.state.recipes.find(recipe => recipe.id === parseInt(id))
    }


    render() {


        return (
            <>
                <Recipes data={this.state.recipes}></Recipes>
                <Router>
                    <Recipe
                        path="/recipe/:id"
                    getRecipe={(id) => this.getRecipe(id)}>
                    </Recipe>
                    <Recipe
                        path="/with/:filter">
                    </Recipe>


                </Router>
            </>
        );
    }

}

export default App;
