import React, {Component} from 'react';
import {Link} from "@reach/router";

class Recipes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let list = this.props.data.map(
            elm => <li><Link to={`/recipe/${elm.id}`}>{elm.title} - {elm.desc}</Link></li>
        );

        return (
            <>
                <link>

                </link>
                <h2>Cooking Recipes</h2>
                <ul>
                    {list}
                </ul>
            </>
        );
    }
}

    export default Recipes;
