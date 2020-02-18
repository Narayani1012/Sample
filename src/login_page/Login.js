import React, { Component } from 'react';
import { BrowserRouter as Redirect, Link } from 'react-router-dom';
import Input from '../component/Input';
import Button from "../component/Button";
import history from '../history'

const initialState = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: ""
}
class Login extends Component {
    state = initialState;
    constructor (props){
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    handleChange = event => {
        const isCheckbox = event.target.type === "inputbox";
        this.setState({
            [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
    };

    validate = () => {
        let usernameError = "";
        let passwordError = "";

        if(!this.state.username){
            usernameError = "Username Cannot be Blank";
        }

        if(!this.state.password){
            passwordError = "Password Cannot be Blank";
        }
        if(usernameError || passwordError){
            this.setState({usernameError, passwordError});
            return false;
        }

        return true;

    }
    handleSubmit = event => {
        const isValid = this.validate();
        if (isValid) {
            //clear  Form
            // this.setState(initialState);
            history.push("/Home")
         }
         else {
            event.preventDefault();
         }
    };
    render() {
        return (
            <div className="Registration-form">
                    <div className="inner-box">
                        <h1>User Login</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input name="username" className="text" type="text" value={this.state.username} onChange={this.handleChange} placeholder="User Name" ref={this.inputRef}/>
                            <div>{this.state.usernameError}</div>
                            <br/><br/>
                            <input name="password" className="text" type="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                            <div>{this.state.passwordError}</div>
                            <Button name="sumbit" border_line="none"/>
                            <br />
                            <Link to='/Register'>Click Here for New User</Link>
                            {/* <Redirect to="../component/Refsdemo" className="btn btn-link">Cancel</Redirect> */}
                        </form>
                    </div>
            </div>
        );
    }
}

export default Login;