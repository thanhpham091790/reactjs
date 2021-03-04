import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './burgerIngredient.module.css';
import BurgerBuilder from '../../../containers/BurgerBuilder/BurgerBuilder';

class BurgerIngredient extends Component{

    render(){
        let ingredient = null;

        switch(props.type){

            case("bread-bottom"):
                ingredient = <div className={classess.BreadBottom}></div>;
                break;
            case("bread-top"):
                ingredient = (
                    <div className={classess.BreadTop}>
                        <div classes={classes.Seeds1}></div>
                        <div classes={classes.Seeds2}></div>
                    </div>
                );
                break;
            case("meat"):
                ingredient = <div className={classess.Meat}></div>;
                break;
            
            case("cheese"):
                ingredient = <div className={classess.Cheese}></div>;
                break;
            
            case("bacon"):
                ingredient = <div className={classess.Bacon}></div>;
                break;
            
            case("salad"):
                ingredient = <div className={classess.Salad}></div>;
                break;

            default: 
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default burgerIngredient;