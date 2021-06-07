// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import {requestApiUserForLogger} from "../../ComponentsTaskForBr/api/axis";
import {CurrentPageDispatcher, dataPreloaderDispatcher, preloaderDispatcher} from "./preloaderReducer";

type initStateType = {
    reqError: Array<ReqErrorObgType>,
    error: null | string
}

export type ReqErrorObgType = {
    id: number,
    name: string
}

const REQERROR = "errortest/REQERROR";
const ERROR = "errortest/ERROR";

type actionReqError = {
    type: typeof REQERROR,
    data: ReqErrorObgType
}
type actionError = {
    type: typeof ERROR,
    error?: string
}

const initState: initStateType = {
    reqError: [
        {
            id: 1,
            name: "BRO"
        }
    ],
    error: null
};


export const errortestReducer = (state = initState, action: actionReqError | actionError) => {

    switch (action.type) {
        case REQERROR:
            return {
                ...state, reqError: action.data
            };
        case ERROR:
            return {
                ...state, error: action.error
            };
        default :
            return state;
    }


};
export const dispatchReqErrorAction = (data: ReqErrorObgType): actionReqError => ({type: REQERROR, data});
export const dispatchErrorAction = (error?: string): actionError => ({type: ERROR, error});


export const ThunkErrorBro = (error?: string) => async (dispatch: (arg0: { type: typeof ERROR; }) => void) => {
    dispatch(dispatchErrorAction("BROOO"));
    setTimeout(() =>{ dispatch(dispatchErrorAction("BROOO"))}, 30000);

};
