import React from 'react';
import Child from './Child';

class LifeHooks extends React.Component{
    state = {
        name:'Hussain'
    }

    constructor(){
        super();
        this.state={
            name : 'Umair'
        };
        console.log("constructor");
    }
    componentWillMount(){
        // if(window.innerHeight<500){
        //     this.setState={
        //         innerWidth: window.innerWidth
        //     }
        // }
        console.log("component will mount");
    }
    componentDidMount(){
        console.log('component did mount');
    }
    componentWillReceiveProps(){
        console.log('component will recieve props');
    }
    changeState=()=>{
        this.setState(
            ()=>({
                name:'waiz'
            })
        )
    }
    render(){
        console.log('render');
        return(
            <div>
                {this.state.name}
                {this.state.innerWidth}
                <Child name={this.state.name}/>
                <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}
export default LifeHooks