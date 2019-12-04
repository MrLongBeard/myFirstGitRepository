import React from 'react';
import ReactDOM from 'react-dom'

class App2 extends React.Component{
    state ={
        newnum :0
    }
    static getDerivedStateFromProps(props){
        return({
            newnum:props.num
        })
    }
    render(){
        return(
            <div>
                <h1>After unmount first component</h1>
                <h1>{this.state.newnum}</h1>
            </div>
        )
    }
}

class RandomNumber extends React.Component{
state={
    number:0
}
componentWillUnmount(){
console.log('bye bye');
}
componentDidMount(){
    setTimeout(() => {
        this.setState(()=>(
            {
                number: Math.ceil(Math.random() * 1000)
            }
        ))
    }, 5000);
}
    render(){

    return(
        <div>
            <h1>
                {this.state.number}
                <App2 num={this.state.number} />
            </h1>
        </div>
    )
    }
}
export default RandomNumber