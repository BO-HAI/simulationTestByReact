/**
 * @file:
 * @author: bohai (bohai@100.com).
 * @date: 16/11/2
 */

// Greeter.js
import React, {Component} from 'react'
import config from '../data/config.json'

import styles from  '../sass/greeter.scss'

class Greeter extends Component {
    render() {
        return (
            <div className={styles.root}>
                <span className={styles.icon}></span>
                {config.greetText}
            </div>
        );
    }
}


export default Greeter
