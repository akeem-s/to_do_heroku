import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ListContainer from '../listContainer/ListContainer'
import Login from '../login/Login'
// <Route path="/login" component={Login} />

let verifyAuth = ()=>{
  return false
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' render={()=>(
        verifyAuth() === true ? (<ListContainer/>) :
        (<Redirect to="/login"/>)
        )
       } />
       <Route exact path='/login' render={()=>(
         verifyAuth() === true ? (<ListContainer/>) :
         <Login/>
         )
        } />
    </Switch>
  </main>
)

export default Main
