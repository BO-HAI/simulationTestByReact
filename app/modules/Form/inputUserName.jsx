import React, {Component} from 'react';
import Styles from '../../sass/form.scss';

class InputUserName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regexp: /^[0-9A-Za-z_-]+@[0-9A-Za-z_-]+\.[a-z]{2,3}(\.[a-z]{2})?$|^[0-9A-Za-z_]+$/g,
            inputErrStyle: {}
        }
    };

    validateUserName(event) {
        var el = this.refs.userName;
        console.log(el);

        this.setState({
            inputErrStyle: {
                border: '1px solid red'
            }
        });
    };

    render() {
        return (
            <div className={Styles['form-group']}>
                <label className={Styles['form-group-label']} htmlFor="">
                    用户名：
                </label>
                <input ref="userName" style={this.state.inputErrStyle} onFocus={this.validateUserName.bind(this)} name={this.props.name} type="text" placeholder={this.props.placeholder}/>
                <p className={Styles['form-group-error']}>

                </p>
            </div>
        );
    };
}

export default InputUserName;