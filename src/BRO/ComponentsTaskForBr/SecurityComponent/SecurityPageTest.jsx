import React from "react";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from 'prop-types';
import {getDateForPage, getSelectorForm, getSelectorFormPassword} from "../selectors/selectors";
import {methodRemoveDispatchTEST} from "../../ReduxBr/stateBr/proteinstoreReducer";

export const SecurityPageTest = (props) => {

    const iSsecurity = useSelector(store => store.security.security);
    const storeDataForm = useSelector(getSelectorForm());
    const storeDataFormPassword = useSelector(getSelectorFormPassword());
    const dispatch = useDispatch();
    const method = () => {
        debugger
        dispatch(methodRemoveDispatchTEST());
    };

    return (
        <>
            {/*{!iSsecurity ? <Redirect to={'/protein'}/> : <div>SecurityPageTest</div>}*/}
            <div>{storeDataForm}+{storeDataFormPassword}</div>
            <button onClick={method}>Bro</button>
        </>
    )
};
