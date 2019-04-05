import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dasboard from './components/Dashboard'
import Wizard from './components/Wizard'

export default (
    <Switch>
        <Route path='/' exact component={Dasboard} />
        <Route path='/wizard' component={Wizard} />
        <Route component={NotFound}/>
    </Switch>
)

function NotFound() {
    return (
        <h1>
            404 page not found boi
        </h1>
    )
}