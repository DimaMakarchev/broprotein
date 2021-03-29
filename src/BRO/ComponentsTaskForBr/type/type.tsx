/*
* Protein
*/
export type InitState = {
    name: string,
    password: number,
    datareq: Array<InitStateReq>
}

export type InitStateReq = {
    id: number,
    email: string
}
export type InitStateReqPreloader = {
    userId: number,
    id: number,
    title: string,
}

export type InitStateForm = {
    name: string,
    password: number,
}


export const FORM_DATA = "protein/FORM_DATA";
export const REQUEST_DATA = "protein/REQUEST_DATA";
export const REMOVE = "protein/REMOVE";


export type TypeActionForm = {
    type: typeof FORM_DATA,
    data: InitStateForm,

}
export type TypeActionReq = {
    type: typeof REQUEST_DATA,
    data: InitStateReq,

}
export type TypeActionRemove = {
    type: typeof REMOVE,
    data: number,

}
/*
* Preloader
*/

export type TypePreloaderDispatcher={
    type: typeof PRELOADER
}
export type TypePreloaderDispatcherPRELOADERDATA={
    type:  typeof PRELOADERDATA ,
    data:Array<Object>
}
export type TypePreloaderDispatcherPAGE={
    type: typeof PAGE,
    page:number
}

export type PreloaderType = {
    loader: boolean,
    dateForPage:Array<InitStateReqPreloader>,
    page:number
};

export const PRELOADER = "PRELOADER";
export const PRELOADERDATA = "PRELOADERDATA";
export const PAGE = "PAGE";
