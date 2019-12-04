import React from 'react';

class BlinkingText extends React.Component{
    constructor(){
        super();
        
    }
    state={
        showingText:true
    }
    componentDidMount(){
        setInterval(() => {
            this.setState(
                (previousState)=>({
                    showingText: !previousState.showingText
                })
                )
                console.log("set interval function");
        }, 1000);
    }
    
    render(){
    if(!this.state.showingText){
        console.log("from second text");
        return(
            <div>
                <h1>
                {this.props.secondtext}
                </h1>
            </div>
        )
    }
    console.log("from first text");
        return(
            <div>
                <h1>
                {this.props.text}
                </h1>
            </div>
        )
}
}

class BlinkingTextApp extends React.Component{
    
    render(){
        return(
            <div>
                <BlinkingText text='first text' secondtext='second text'/>
            </div>
        )
    }
}
export default BlinkingTextApp