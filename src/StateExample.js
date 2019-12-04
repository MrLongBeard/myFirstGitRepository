import React from 'react'

class StateExample extends React.Component{

    state={
        cityNames:['Khi','Hyd','Skr']

    }
    render(){
        return(
            <div>
                <City cityNames={this.state.cityNames} name='Sindh'/>
            </div>
        )
    }
}
class City extends React.Component{
    
    render(){
        const cityNames = this.props.cityNames;
        return(
            <div>
                <h4>{this.props.name}</h4>
                <ul>
                    {cityNames.map(name=><li>{name}</li>)}
                </ul>
            </div>
        )
    }
}
export default StateExample;