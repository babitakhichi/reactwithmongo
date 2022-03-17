import './App.css';
import React from 'react';
import { Routes,Route } from 'react-router-dom';

import Nav from './components/nav'
import Register from './components/Register'
import Login from './components/login'


class App extends React.Component
{
  constructor()
  {
    super()
  }
  render()
  {
    return(
      <div>

<div id="wrapper">
	
  <Nav />
 
  			<Routes>
    <Route exact path='/register' element={< Register />}></Route>
    <Route exact path='/login' element={< Login />}></Route>

	</Routes>
  

</div>





</div>
    ) 
  }
}

export default App;
