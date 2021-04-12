import React from "react";
import './App.css';
import {Redirect, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {HeaderBr} from "./BRO/ComponentsTaskForBr/HeaderTaksBRState/Header/HeaderBr";
import {FooterBr} from "./BRO/ComponentsTaskForBr/FooterTaksBRState/Footer/FooterBr";
import ComposeProteinComponent from "./BRO/ComponentsTaskForBr/ProteinComponent/ProteinComponentMemo";

import {PaginationComponent} from "./BRO/ComponentsTaskForBr/PaginationComponent/PaginationComponent";
import {HockFor} from "./BRO/ComponentsTaskForBr/hock/Hocks";
import ErrorTestComponentMemo from "./BRO/ComponentsTaskForBr/ErrorTest/ErrorTestComponent";

// const PaginationComponent = React.lazy(() => import("./BRO/ComponentsTaskForBr/PaginationComponent/Page.jsx"));

function App() {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <HeaderBr/>
                <div className='menu'>
                    <Route exact='/protein' path='/protein' render={HockFor(ComposeProteinComponent)}/>
                    <Route path='/protein/br' render={() => <div>ok</div>}/>
                    <Route path='/pagination' render={HockFor(PaginationComponent)}/>
                    <Route path='/errortest' render={HockFor(ErrorTestComponentMemo)}/>
                    <Route path='/' render={() => <Redirect to={'/protein'}/>}/>

                </div>
                <FooterBr/>
            </div>
        </BrowserRouter>

    );
}

export default App;
