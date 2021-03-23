import React, { Component } from 'react';

class DisplayComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            persons: this.props.person || []
        }
    }
    renderOutput = () => {
        console.log(this.state.persons);
        const data = this.state.persons;
        const mapRows = data.map(person =>(
            <React.Fragment key={person.name}>
                <p><span>Name: {person.name}</span></p>
                <p><span>Age: {person.age}</span></p>
            </React.Fragment>
        )

        );
        return mapRows;
    }

    switchNameHandler =()=> {
        console.log("click me to change the name");
        this.setState({
            persons:[
                {name: "Govind", age:22},
                {name: "Suraj", age: 20},
                {name: "Uttam", age: 25}
            ]
        })
    }
    render(){
        return(
            <div>
                {this.renderOutput()}
                <button onClick={this.switchNameHandler}>Switch</button>
            </div>
        );
    }
}

export default DisplayComponent;