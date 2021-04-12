import React from "react";
import {ReqErrorObgType} from "../../ReduxBr/stateBr/errortestReducer";

type ErrorTestType = {
    reqError: Array<ReqErrorObgType>,
    touchMeBro: () => void,
    error: null | string
}

export const ErrorTest: React.FC<ErrorTestType> = ({touchMeBro, reqError, error, ...props}) => {






    return (
        <>
            {error}
            {reqError?.map(value => <div>{value.id} + {value.name}+{}</div>)}

            <button onClick={touchMeBro}>Touch me Bro</button>
        </>
    )

};
