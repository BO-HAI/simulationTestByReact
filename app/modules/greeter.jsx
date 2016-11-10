/**
 * @file:
 * @author: bohai (bohai@100.com).
 * @date: 16/11/2
 */

// Greeter.js
import React, {Component} from 'react';
import config from '../data/config.json';
import cns from 'classnames';

import Login from './login.jsx';
import styles from  '../sass/greeter.scss'

console.log(styles);

class Greeter extends Component {
    render() {
        return (
            <div>
                <span className={cns(styles.icon, styles.a)}></span>
                {config.greetText}
                <Login/>
            </div>
        );
    }
}


export default Greeter
