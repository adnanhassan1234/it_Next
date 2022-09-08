import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar.jsx";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { Switch, Route, Redirect } from 'react-router-dom';
import ScrollButton from './ScrollButton';
import { Fragment } from 'react';


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Redirect to='/' />
      </Switch>
      <Footer />
      <Fragment>
        <ScrollButton />
      </Fragment>
    </>
  )
}

export default App;
