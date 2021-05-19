import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../App'
import DetailCard from './DetailCard'

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/:city' render={props => <DetailCard {...props} check={props} />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
