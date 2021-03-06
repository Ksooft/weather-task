import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../App'
import DetailCard from './DetailCard'

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/weather-task' component={App} />
                <Route path='/weather-task/:city' render={props => <DetailCard {...props} check={props} />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
