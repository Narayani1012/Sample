import React, { Component } from 'react';
import Input from '../component/Input';
import Button from '../component/Button';
import { Link } from 'react-router-dom'
import history from '../history';

const initialState = {
        name: "",
        gender: "",
        age: "",
        phonenumber: "",
        nameError: "",
        genderError: "",
        ageError: "",
        phonenumberError: ""
}

class Register extends Component {
    state = initialState;
    constructor(props){
        super(props)
        this.inputRef = React.createRef() 
    }
    componentDidMount() {
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
        let nameError = "";
        let genderError = "";
        let ageError = "";
        let phonenumberError = "";

        if(!this.state.name) {
            nameError = "name Cannot be Blank";
        }

        if(!this.state.gender) {
            genderError = "Gender Cannot be Blank";
        }

        if(!this.state.age){
            ageError = "Age Cannot be blank";
        }

        if(!this.state.phonenumber){
            phonenumberError = "PhoneNumber Cannot be blank";
        }

        if(nameError || genderError || ageError || phonenumberError){
            this.setState({nameError, genderError, ageError, phonenumberError});
            return false;
        }
        return true;

    };
    handleSubmit = event => {
        const isValid = this.validate();
        history.push("/Home");
        if (isValid) {
            //clear  Form
            this.setState(initialState);
         }
         else{
            event.preventDefault();

         }
    };
    render() {
        return ( 
            <div className="Registration-form">
                <div className="inner-box">
                    <h1>Registration Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input className="text" name="name" type="text" onChange={this.handleChange} placeholder="First Name" value={this.state.name} ref={this.inputRef}/>
                        <div>{this.state.nameError}</div>
                        <br/>
                        <input className="text" name="gender" type="text" onChange={this.handleChange} placeholder="Gender" value={this.state.gender}/>
                        <div>{this.state.genderError}</div>
                        <br/>
                        <input className="text" name="age" type="text" onChange={this.handleChange} placeholder="Age" value={this.state.age}/>
                        <div>{this.state.ageError}</div>
                        <br/>
                        <input className="text" name="phonenumber" type="number" onChange={this.handleChange} placeholder="Phone Number" value={this.state.phonenumber}/>
                        <div>{this.state.phonenumberError}</div>
                        <Button name="Register"/>
                        <br/>
                        <Link to="/">Login Form</Link>
                    </form>
                </div>
            </div>
        )

    }
}
export default Register