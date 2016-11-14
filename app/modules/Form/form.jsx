import React, {Component} from 'react';
import InputUserName from './inputUserName.jsx';

import Styles from '../../sass/form.scss'

class Form extends Component {

    render() {
        return (
            <form action={this.props.action} className={Styles.form}>
                <InputUserName name="userName" placeholder="请输入用户名"/>
            </form>
        );
    }
}

export default Form;