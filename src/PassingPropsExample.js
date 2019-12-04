import React,{Component} from 'react';

class PassingPropsExample extends Component{
render(){

    return(
        <div>
            <City cityNames={['Kar','Hyd','Lhr']} name='Umair'/>
            <City cityNames={['Isl','Qtta','Psh']} name='Hussain'/>
        </div>
    )
}
}
class City extends Component{
    render(){
        const cityNames = this.props.cityNames;
        return(
            <div>
                <ul>
                    {cityNames.map(name => <li>{name}</li>)}
                </ul>
                <h4>{this.props.name}</h4>
            </div>
        )
    }
}
export default PassingPropsExample;