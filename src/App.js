import React,{Component} from 'react';
import './App.css';

class Cities extends Component
{
render()
{
  const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }]
return(
  <div>
    <ul>
      {this.props.anyname.map(names => <li key={names}>{names}</li>)}
    </ul>
    <ul>
      {musicData.map(mdata => <li>{mdata.name} by {mdata.artist} sold {mdata.sales}</li>)}
    </ul>
    <button onClick={this.props.changeFunc}>Change me</button>
  </div>
  )
}
}


class App extends Component{
state = {
  cities:['Karachi','Lahore','Islamabad'],
  address : 'axiom'
}
changeState = () => { this.setState(
    ()=>(
      {
        cities:['Pes','Quet','Hyd']
      }
    )
  )}
render(){
  return (
    <div>
      <Cities anyname={this.state.cities} changeFunc={this.changeState}/>,    
    </div>
        );
}
}
export default App;
