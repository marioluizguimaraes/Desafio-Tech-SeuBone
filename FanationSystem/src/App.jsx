import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Dashboard from '../src/pages/Dashboard/Dashboard'
import Header from '../src/components/Header/Header'

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App
