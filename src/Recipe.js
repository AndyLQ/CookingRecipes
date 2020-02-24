import React, {Component} from 'react';
import {Link} from "@reach/router";

class Recipe extends Component {

    constructor(props) {
        super(props);


    }


    render() {

        let recipe = this.props.getRecipe(this.props.id);

        let iList = recipe.ingredients.map(
            iName => <li>{iName}</li>
        );

        return (
            <>
                <h3>{recipe.title}</h3>
                <p>{recipe.desc}</p>
                <ul>
                    {iList}
                </ul>
                <p>Cooking time: {recipe.cookingTime} minutes</p>
            </>
        );
    }
}
    export default Recipe;
