// import {AppRootReducerType} from "../../ReduxBr/store";

export const getSelectorLoader = () => {
    return state=>state.preloader.loader;
    // return function state(state: AppRootReducerType) {
    //     return state.preloader.loader;
    // }
};

export const getSelectorForm = () => {
    return state => state.proteinstore.name
    // return function state(state: AppRootReducerType) {
    //     return state.proteinstore.name;
    // }

};
export const getSelectorFormReq = () => {
    return state => state.proteinstore.datareq
    // return function state(state: AppRootReducerType) {
    //     return state.proteinstore.datareq;
    // }
};
export const getPage = () => {
    return state => state.preloader.page
    // return function state(state: AppRootReducerType) {
    //     return state.proteinstore.datareq;
    // }
};
export const getDateForPage = () => {
    debugger
    return state => state.preloader.dateForPage[0]
    // return function state(state: AppRootReducerType) {
    //     return state.proteinstore.datareq;
    // }
};
