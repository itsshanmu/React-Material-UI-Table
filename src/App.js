import React from 'react';
import logo from './logo.svg';
import './App.css';

import FormFields from './Formfields'
import FormDataTable from './materialuitable'


class App extends React.Component {
  constructor(props){
    super()  
    this.props= props;
    this.handleFormData = this.handleFormData.bind(this);
    this.state = {empData:[]} 
  }

  handleFormData = (data) => {   
   console.log('handleFormData '+JSON.stringify(data));
  }
     
  render() {
    return (
      <div>
        <FormFields formData={this.handleFormData} />        
        <FormDataTable/>
      </div>
    );
  }
}

export default App