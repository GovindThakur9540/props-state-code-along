import React, { Component } from 'react';
import DisplayComponent from '../View/DisplayComponent' 

class DataComponent extends Component{
constructor(){
    super();
    this.state ={
        persons:[
            {name: "Shivam", age:22},
            {name: "Anubhav", age:21},
            {name: "Abhishar", age:22}
        ]
    }
}
    render(){
        return(
        <>
            <DisplayComponent person={this.state.persons}/>
        </>          
        );
    }
}

export default DataComponent;