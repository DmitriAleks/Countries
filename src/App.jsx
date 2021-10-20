import './App.css';
import {Header} from "./component/Header";
import {Main} from './component/Main'
import {Route, Switch} from "react-router-dom";
import {HomePage} from "./page/HomePage";
import {Details} from "./page/Details";
import {NotFound} from "./page/NotFound";
import {useState} from "react";

function App() {
    const [countries, setCountries] = useState([])

    return (
        <>
            <Header/>
            <Main>
                <Switch>
                    <Route exact path='/'>
                        <HomePage countries={countries} setCountries={setCountries}/>
                    </Route>
                    <Route path='/country/:name' component={Details}/>
                    <Route component={NotFound}/>
                </Switch>
            </Main>
        </>

    );
}

export default App;
