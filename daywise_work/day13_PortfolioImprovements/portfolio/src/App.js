import React, {useEffect} from 'react'
import './App.css';
import NavBar from './components/Navbar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Projects from './pages/Projects.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Minesweeper from './pages/Minesweeper.js'
import Tapparel from './pages/Tapparel.js'
import Coinstance from './pages/Coinstance.js'
import Covidmapper from './pages/Covidmapper.js'
import Footer from './components/Footer.js'
import ReactGA from 'react-ga';


function App() {

  useEffect(() => {
    ReactGA.initialize('UA-180302457-1');
    ReactGA.pageview(window.location.pathname + window.location.search)
    },[]);


  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/minesweeper' exact component={Minesweeper} />
        <Route path='/tapparel' exact component={Tapparel} />
        <Route path='/coinstance' exact component={Coinstance} />
        <Route path='/covidmapper' exact component={Covidmapper} />
        <Route path='/about' exact component={About} />
        
      
      </Switch> 
      <Footer/>
    </Router>
  );
}

export default App;
