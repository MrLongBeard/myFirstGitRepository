import React,{Component} from 'react';
import propTypes from 'prop-types';

const Test = (props) => {
    return(
        <h1>
            {props.str}
        </h1>
    )
}
Test.propTypes = {
    str:propTypes.string,
    bool:propTypes.bool,
    strornum:propTypes.oneOfType([propTypes.string,propTypes.number]),
    info:propTypes.arrayOf(propTypes.shape({
        name:propTypes.string,
        age:propTypes.number
    }))
}

class App2 extends Component{
    state = {
        fistname:"",
        lastname:""
    }
    whenChange = (event)=>{
        const {name,value} = event.target;
        this.setState(
            ()=>(
                {[name] : value}
            )
        )
    }

    render(){
    
    return(
        <div>
            <Test 
            str="hello" 
            bool={true} 
            strornum="Umair" 
            info={{name:'umair', age:23},{name:'amina',age:22}}/>
            <input type="text" name="firstname" onChange={this.whenChange}/>
            <p>{this.state.firstname}</p>
            <input type="text" name="lastname" onChange={this.whenChange}/>
            <p>{this.state.lastname}</p>
        </div>
    )
}
}
export default App2;