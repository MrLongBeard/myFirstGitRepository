import React from 'react';

class Child extends React.Component{
    state = {
        name:'Hussain'
    }

    constructor(){
        super();
        
        console.log("Child constructor");
    }
    componentWillMount(){
        console.log("Child component will mount");
    }
    componentDidMount(){
        console.log('Child component did mount');
    }
    componentWillReceiveProps(){
        console.log('Child Component will recieve props');
    }
    render(){
        console.log('Child render');
        return(
            <div>
                <h1>Child name:   {this.props.name}</h1>
            </div>
        )
    }
}
export default Child