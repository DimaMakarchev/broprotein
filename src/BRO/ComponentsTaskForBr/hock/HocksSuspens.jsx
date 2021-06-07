import React from "react";


export const HocksSuspens = (Component) => (props) => {

    return (
        // <Suspense fallback={<div>...Bro OK</div>}>
            <React.Suspense fallback={<div>Loader....</div>}>
                <Component {...props}/>
            </React.Suspense>

        // </Suspense>
    )
};
