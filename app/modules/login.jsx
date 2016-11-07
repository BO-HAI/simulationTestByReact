
import React, {Component} from 'react';
import Styles from '../sass/form.scss';

class Login extends Component {
    render() {
        return (
            <form className={Styles.form} action="">
                <div className={Styles['form-group']}>
                    <label className={Styles['form-group-label']} htmlFor="userName">用户名:</label>
                    <input name="userName" type="text"/>
                    <p className={Styles['form-group-error']}>
                        1
                    </p>
                </div>
                <div className={Styles['form-group']}>
                    <label className={Styles['form-group-label']} htmlFor="password">密码:</label>
                    <input name="password" type="text"/>
                    <p className={Styles['form-group-error']}>
                        1
                    </p>
                </div>
            </form>
        );
    }
}

export default Login;
