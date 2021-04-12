import React, {memo, useEffect} from "react";
import {ErrorTest} from "./ErrorTest";
import {useDispatch, useSelector} from "react-redux";
import {requestApiUserForLogger} from "../api/axis";
import {dispatchReqErrorAction, ThunkErrorBro} from "../../ReduxBr/stateBr/errortestReducer";


const ErrorTestComponentMemo = memo;

const ErrorTestComponent = ({...props}) => {
    //useSelect
    let reqError = useSelector(store => store.errortest.reqError);
    let error = useSelector(store => store.errortest.error);
    let dispatch = useDispatch();
    //useState
    //useDispatch or thunk

    //method onClick

    //useEffect , []

    const touchMeBro = async () => {
        try {
            let data = await requestApiUserForLogger.getReq();
            dispatch(dispatchReqErrorAction(data.data))
        } catch (e) {
            dispatch(ThunkErrorBro(e))
        }

    };
    return (
        <>
            <ErrorTest
                touchMeBro={touchMeBro}
                reqError={reqError}
                error={error}
            />
        </>
    )
};

export default ErrorTestComponentMemo(ErrorTestComponent);
