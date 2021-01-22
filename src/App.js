import { Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Leads, { Lead } from "./components/Leads";
import Home from "./components/Home";
import './App.css';
import Navigation from "./components/Navigation";


function App() {
    return (
        <div>
            <Navigation />
            <Switch>
                <Route
                    path='/'
                    exact
                    component={Home}
                />

                <Route
                    path='/leads'
                    exact
                    component={Lead}
                />

                <Route
                    path='*'
                    component={PageNotFound}
                />
            </Switch>
        </div>
    )
}

export default App;