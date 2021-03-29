import {
    PAGE,
    PRELOADER,
    PRELOADERDATA,
    PreloaderType,
    TypePreloaderDispatcher,
    TypePreloaderDispatcherPAGE,
    TypePreloaderDispatcherPRELOADERDATA
} from "../../ComponentsTaskForBr/type/type";
import {requestApiUserForLogger} from "../../ComponentsTaskForBr/api/axis";


const initState: PreloaderType = {
    loader: false,
    dateForPage: [

        ],
    page: 4

};


export const preloaderReducer = (state = initState, action: TypePreloaderDispatcher | TypePreloaderDispatcherPAGE | TypePreloaderDispatcherPRELOADERDATA) => {
    switch (action.type) {
        case PRELOADER:
            debugger
            return {
                ...state, loader: !state.loader
            };
        case PRELOADERDATA:
            debugger
            return {
                ...state, dateForPage: [action.data]
            };
        case PAGE:
            debugger
            return {
                ...state, page: action.page
            };
        default:
            debugger
            return state;
    }
};


export const preloaderDispatcher = (): TypePreloaderDispatcher => ({type: PRELOADER});
export const dataPreloaderDispatcher = (data: Array<Object>): TypePreloaderDispatcherPRELOADERDATA => ({
    type: PRELOADERDATA,
    data
});
export const CurrentPageDispatcher = (page: number): TypePreloaderDispatcherPAGE => ({type: PAGE, page});

export const ThunkPreloaderPage = (page: number) => async (dispatch: (arg0: { type: "PRELOADER" | "PRELOADERDATA" | "PAGE"; }) => void) => {
    debugger;
    dispatch(preloaderDispatcher());
    debugger
    let data = await requestApiUserForLogger.getReqPage(page);
    // console.log(data.data);
    debugger;
    dispatch( dataPreloaderDispatcher(data.data));
    dispatch(CurrentPageDispatcher(page));
    dispatch(preloaderDispatcher());
};
//import {
//     PAGE,
//     PRELOADER,
//     PRELOADERDATA,
//     PreloaderType,
//     TypePreloaderDispatcher,
//     TypePreloaderDispatcherPAGE,
//     TypePreloaderDispatcherPRELOADERDATA
// } from "../../ComponentsTaskForBr/type/type";
// import {requestApiUserForLogger} from "../../ComponentsTaskForBr/api/axis";
//
//
// const initState: PreloaderType = {
//     loader: false,
//     dateForPage: [],
//     page: 4
//
// };
//
//
// export const preloaderReducer = (state = initState, action: TypePreloaderDispatcher | TypePreloaderDispatcherPAGE | TypePreloaderDispatcherPRELOADERDATA) => {
//     switch (action.type) {
//         case PRELOADER:
//             debugger
//             return {
//                 ...state, loader: !state.loader
//             };
//         case PRELOADERDATA:
//             debugger
//             return {
//                 ...state, dateForPage: [...state.dateForPage, action.data]
//             };
//         case PAGE:
//             debugger
//             return {
//                 ...state, page: action.page
//             };
//         default:
//             debugger
//             return state;
//     }
// };
//
//
// export const preloaderDispatcher = (): TypePreloaderDispatcher => ({type: PRELOADER});
// export const dataPreloaderDispatcher = (data: Array<Object>): TypePreloaderDispatcherPRELOADERDATA => ({
//     type: PRELOADERDATA,
//     data
// });
// export const CurrentPageDispatcher = (page: number): TypePreloaderDispatcherPAGE => ({type: PAGE, page});
//
// export const ThunkPreloaderPage = (page: number) => async (dispatch: (arg0: { type: "PRELOADER" | "PRELOADERDATA" | "PAGE"; }) => void) => {
//     debugger;
//     dispatch(preloaderDispatcher());
//     debugger
//     let data = await requestApiUserForLogger.getReqPage(page);
//     // console.log(data.data);
//     debugger;
//     dataPreloaderDispatcher(data.data);
//     CurrentPageDispatcher(page);
//     dispatch(preloaderDispatcher());
// };
