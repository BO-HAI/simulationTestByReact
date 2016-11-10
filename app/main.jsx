/**
 * @file:
 * @author: bohai (bohai@100.com).
 * @date: 16/11/2
 */

//main.js
import React from 'react';
import {render} from 'react-dom';
import Form from './modules/Form/form.jsx';


import './sass/main.scss'

render(<Form action="./login"/>, document.getElementById('root'));