import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop'; 
// import {BwrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
class App extends Component {
  state={
    sideDrawerOpen:false
  }
  drawerToggleClickHandler = ()=>{
    this.setState((prevState)=>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  }
  backdropClickHandler= () =>{
    this.setState({sideDrawerOpen:false});
  }
 render(){
  
   let backdrop;

   if(this.state.sideDrawerOpen){
 
     backdrop = <Backdrop click={this.backdropClickHandler}/>
   }
  return (
    <Router>
    <div className="page-conatiner">
      <div className="content-wrap">
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
      <main style={{ marginTop:'65px'}}>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path ="/services" component={Services}/>
        <Route path="/contactus" component={Contact}/>
        </Switch>
      </main>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}
}

export default App;
