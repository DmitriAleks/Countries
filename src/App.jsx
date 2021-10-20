import axios from "axios";
import './App.css';
import {Header} from "./component/Header";
import {Main} from './component/Main'
import {Controls} from "./component/Controls";
import {useEffect, useState} from "react";
import {ALL_COUNTRIES} from "./config";
import {List} from "./component/List";
import {Switch, Route} from "react-router-dom";
import {HomePage} from "./page/HomePage";
import {Details} from "./page/Details";
import {NotFound} from "./page/NotFound";

function App() {

    return (
        <>
            <Header/>
            <Main>
                <Switch>
                    <Route exact patch={'/'}>
                        <HomePage/>
                    </Route>
                    <Route path={'/country/:name'} component={<Details/>}/>
                    <Route component={<NotFound/>}/>
                </Switch>
            </Main>
        </>

    );
}

export default App;
