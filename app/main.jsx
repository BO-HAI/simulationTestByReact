/**
 * @file:
 * @author: bohai (bohai@100.com).
 * @date: 16/11/2
 */

//main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './modules/greeter.jsx';


import './sass/main.scss'

render(<Greeter />, document.getElementById('root'));