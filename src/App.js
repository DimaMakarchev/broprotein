import React from "react";
import './App.css';
import {Redirect, withRouter} from "react-router";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HeaderBr} from "./BRO/ComponentsTaskForBr/HeaderTaksBRState/Header/HeaderBr";
import {FooterBr} from "./BRO/ComponentsTaskForBr/FooterTaksBRState/Footer/FooterBr";
import ComposeProteinComponent from "./BRO/ComponentsTaskForBr/ProteinComponent/ProteinComponentMemo";
import SecurityComponentCompose from "./BRO/ComponentsTaskForBr/SecurityComponent/SecurityComponent.jsx";

import {PaginationComponent} from "./BRO/ComponentsTaskForBr/PaginationComponent/PaginationComponent";
import {HockForProvaderAdd} from "./BRO/ComponentsTaskForBr/hock/Hocks";
import ErrorTestComponentMemo from "./BRO/ComponentsTaskForBr/ErrorTest/ErrorTestComponent";
import {SecurityPageTest} from "./BRO/ComponentsTaskForBr/SecurityComponent/SecurityPageTest";
import {ChatComponentBr} from "./BRO/ComponentsTaskForBr/Chat/ChatComponentBr";

// const PaginationComponent = React.lazy(() => import("./BRO/ComponentsTaskForBr/PaginationComponent/Page.jsx"));

export function App() {
    return (
        <BrowserRouter>
            <Switch>
                <div className='wrapper'>
                    <HeaderBr/>
                    <div className='menu'>
                        <Route exact='/protein' path='/protein' render={HockForProvaderAdd(ComposeProteinComponent)}/>
                        <Route path='/protein/br' render={() => <div>ok</div>}/>
                        <Route path='/pagination' render={HockForProvaderAdd(PaginationComponent)}/>
                        <Route path='/errortest' render={HockForProvaderAdd(ErrorTestComponentMemo)}/>
                        <Route path='/security' render={HockForProvaderAdd(SecurityComponentCompose)}/>
                        <Route path='/securitypagetest' render={HockForProvaderAdd(SecurityPageTest)}/>
                        <Route path='/chat' render={HockForProvaderAdd(ChatComponentBr)}/>
                        <Route path='/' render={() => <Redirect to={'/protein'}/>}/>
                    </div>
                    {/*<FooterBr/>*/}
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export const AppRouter = withRouter(App);

export const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
};
