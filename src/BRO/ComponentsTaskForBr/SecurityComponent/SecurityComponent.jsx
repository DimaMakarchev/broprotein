import React, {memo, useCallback} from "react";
import {compose} from "redux";
import {SecurityComponentForm} from "./SecurityComponentForm";
import {useDispatch, useSelector} from "react-redux";
import {actionReducerSecurityThunk} from "../../ReduxBr/stateBr/securityReducer";
import {getSelectorSecurityMes, getSelectorSecurityReq} from "../selectors/selectors";


const SecurityComponentCompose = compose(memo);
const SecurityComponent = (props) => {

    const dispatch = useDispatch();
    debugger

    const data = useSelector(getSelectorSecurityReq());
    const mes = useSelector(getSelectorSecurityMes());

    const onSubmit = useCallback(
        (dataform) => {
            dispatch(actionReducerSecurityThunk(dataform));

        },
        [props],
    );


    return (
        <>
            {data && <div>BRO))))</div>}
            {mes}
            <SecurityComponentForm
                onSubmit={onSubmit}
            />
        </>
    )
};

export default SecurityComponentCompose(SecurityComponent);
