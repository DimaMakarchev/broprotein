import {requestApiUserForLogger} from "../../ComponentsTaskForBr/api/axis";
import axios from "axios";
import {useMemo} from "react";

const SECURITY = 'SECURITY';
type initStateType = {
    securitytrue: boolean,
    messages: string
}
type ActionSecurity = {
    type: typeof SECURITY,
    req: boolean,
    messages: string
}
const initState: initStateType = {
    securitytrue: false,
    messages: " no Bro"
};

type FormDataType = {
    name: string,
    password: string
}

export const securityReducer = (state = initState, action: ActionSecurity): initStateType => {
    switch (action.type) {
        case SECURITY:
            debugger;
            return {
                ...state,
                securitytrue: action.req,
                messages: action.messages
            };
        default:
            return state;
    }
};

export const actionReducerSecurity = (req: boolean, messages: string) => ({type: SECURITY, req, messages});

export const actionReducerSecurityThunk = (dataType: FormDataType) => async (dispatch: (arg0: { req: boolean; messages: string; type: string }) => void) => {
    debugger
    // const messages = await requestApiUserForLogger.getReqSecurity();
    const messages =
        await requestApiUserForLogger.postReqSecurity();
    ;
    // const messages = await axios({
    //     method: 'post',
    //     url: 'http://localhost:8456/',
    //     data: {
    //         firstName: 'Fred',
    //         lastName: 'Flintstone'
    //     },
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //     }
    // });
    if (messages.data != undefined) {
        debugger
        dispatch(actionReducerSecurity(true, messages.data.firstName));

    }

};

