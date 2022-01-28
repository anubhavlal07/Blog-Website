import React from 'react';
import { Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components import
import Header from './components/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/contact';
import About from './components/About/about';
import DetailedView from './components/Post/DetailedView';
import CreateView from './components/Post/CreateView';
import UpdateView from './components/Post/UpdateView';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Box style={{marginTop: 64}}>
      <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/contact' component={Contact} />
    <Route exact path='/details/:id' component={DetailedView} />
    <Route exact path='/create' component={CreateView} />
    <Route exact path='/update/:id' component={UpdateView} />
    </Switch>
    </Box>
    </BrowserRouter>
  );
}

export default App;
