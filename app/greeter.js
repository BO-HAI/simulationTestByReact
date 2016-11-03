/**
 * @file:
 * @author: bohai (bohai@100.com).
 * @date: 16/11/2
 */

// Greeter.js
import React, {Component} from 'react'
import config from './config.json'

import styles from  './css/greeter.css'

class Greeter extends Component {
    render() {
        return (
            <div className={styles.root}>
                {config.greetText}
            </div>
        );
    }
}


export default Greeter
