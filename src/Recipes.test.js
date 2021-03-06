import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Recipes from "./Recipes";

const recipes = [
    {
        "id": 0,
        "title": "Pizza",
        "desc": "Pizza is nice",
        "ingredients": ["tomato", "cheese"],
        "cookingTime": 30
    },
    {
        "id": 1,
        "title": "Baked potatoes with fried eggs",
        "desc": "Served with baked beans",
        "ingredients": ["cheese", "potatoes", "eggs", "beans"],
        "cookingTime": 60
    },
    {
        "id": 2,
        "title": "Vegetable quiche",
        "desc": "With grated courgette and cheese",
        "ingredients": ["cheese", "courgette"],
        "cookingTime": 70
    }
];

it('renders Recipes with title', () => {
    const {getAllByText} = render(<Recipes data={recipes}/>);
    expect(getAllByText(/Cooking Recipes/i)[0]).toBeInTheDocument();
});

it('renders Recipes with recipe titles', () => {
    const {getByText} = render(<Recipes data={recipes}/>);
    expect(getByText(/Pizza/i)).toBeInTheDocument();
    expect(getByText(/Baked potatoes with fried eggs/i)).toBeInTheDocument();
    expect(getByText(/Vegetable quiche/i)).toBeInTheDocument();
});

it('does not render ingredients here', () => {
    const {queryByText} = render(<Recipes data={recipes}/>);
    expect(queryByText(recipes[0].ingredients[0])).toBeNull();
    expect(queryByText(recipes[0].ingredients[1])).toBeNull();
});