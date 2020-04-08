import React, {Component} from 'react';
import './Form.css';

class FormFields extends Component{

    constructor(props){
        super()  
        this.props= props;
        this.state = {empId:'',empName:'',empDob:'',empAdd:'',pincode:''}       
    }

    handleInputChange = (e) =>{
        switch(e.target.id){
            case "eid" : this.setState({empId : e.target.value}); console.log('Id '+e.target.value);break;
            case "ename" : this.setState({empName : e.target.value}); console.log('Name '+e.target.value);break;
            case "edob" : this.setState({empDob : e.target.value}); console.log(' DOB '+e.target.value);break;
            case "eadd" : this.setState({empAdd : e.target.value}); console.log(' Address '+e.target.value);break;
            case "epin" : this.setState({pincode : e.target.value}); console.log(' pin '+e.target.value);break;
        }

        console.log('state value '+JSON.stringify(this.state));       
    }

    handleFormSubmit = () =>{
        this.props.formData(this.state);
    }

    render(){
        return(
            <div>
                <h1 align="center">Employee Details</h1>
                <form onSubmit={this.handleFormSubmit} >
                    <label for="Empid">Employee Id</label>
                    <input type="number" id="eid" name="Empid" onChange={this.handleInputChange} placeholder="Enter Employee Id"pattern=" {0-9}" required/>
                    <br/>
                    <label for="name">Employee Name</label>
                    <input type="text" id="ename" name="name" onChange={this.handleInputChange} placeholder="Enter Employee Name" pattern="[a-zA-Z][a-zA-Z ]{4,}" required/>
                    <br/>
                    <label for="dob">Employee DOB</label>
                    <input type="date" id="edob" name="Empdob" onChange={this.handleInputChange} placeholder="Enter Employee Date of birth"  required/>
                    <br/>     
                    <label for="address">Employee Address</label>
                    <input type="text" id="eadd" name="Empadd" onChange={this.handleInputChange} placeholder="Enter Employee Address" pattern="[a-zA-Z][a-zA-Z ]{4,}" required/>
                    <br/>   
                    <label for="pincode">Pincode</label>
                    <input type="text" maxlength="6" id="epin" onChange={this.handleInputChange} placeholder ="Enter Pin code" name ="pincode" minlength="6" required/>
                    <br/><br/>
                    <input type="submit" value="Submit"/>
            </form>
            </div>
        )
    }
}

export default FormFields
