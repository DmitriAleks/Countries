import './App.css';
import {Header} from "./component/Header";
import {Main} from './component/Main'
import {Controls} from "./component/Controls";

function App() {
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
