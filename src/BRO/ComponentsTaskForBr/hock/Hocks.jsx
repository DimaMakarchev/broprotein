import {Provider} from "react-redux";
import {store} from "../../ReduxBr/store";
import React, {Suspense} from "react";


export const HockFor = (Component) => (props) => {

    return (
        // <Suspense fallback={<div>...Bro OK</div>}>
            <Provider store={store}>
                <Component {...props}/>
            </Provider>

        // </Suspense>
    )
};
