import React,{Component} from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';

class Router extends Component{
    constructor(){
        super();
        this.state={
            login:false
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                login:true
            })
        },3000)
    }
    render(){
        const {login}=this.state;
        return(
        <BrowserRouter>
            <Switch>    
                {/* <Route exact path='/' component={Root}/> */}
                <Route exact path='/' component={Home}/>
                <PrivateRoute login={login} path='/contact' component={Contact}/>
            </Switch>
        </BrowserRouter>
        )
    }
}
const PrivateRoute = ({component:Component,login,...rest})=>{
    console.log(login)
    return(
        <Route {...rest} 
        render={(props)=> login ? <Component {...props}/> : <Redirect to='/'/>}
        />
    )
}
const Root = ()=>{
    return(
        <h1>"Root Page"</h1>
        
    )
}
const Home = (props)=>{
    return(
        <div>
        <h1>"Home Page"</h1>
        <button onClick={()=>props.history.push("/contact")}>Contact</button>
        </div>
    )
}
const Contact = ()=>{
    return(
        "Contact us"
    )
}

export default Router