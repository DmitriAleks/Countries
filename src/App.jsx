import axios from "axios";
import './App.css';
import {Header} from "./component/Header";
import {Main} from './component/Main'
import {Controls} from "./component/Controls";
import {useEffect, useState} from "react";
import {ALL_COUNTRIES} from "./config";

function App() {
    const [countries,setCountries] = useState([])
    useEffect(()=> {
        axios.get(ALL_COUNTRIES)
            .then(
            ({data}) => setCountries(data)
        )
    },[])
    console.log(countries)
    return (
        <div className="App">
            <>
                <Header/>
                <Main>
                    <Controls/>
                </Main>
            </>
        </div>
    );
}

export default App;
