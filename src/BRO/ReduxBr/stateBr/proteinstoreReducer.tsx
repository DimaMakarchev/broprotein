import {
    FORM_DATA,
    InitState,
    InitStateForm,
    InitStateReq,
    REMOVE,
    REQUEST_DATA, TEST,
    TypeActionForm,
    TypeActionRemove,
    TypeActionReq, TypeActionTEST
} from "../../ComponentsTaskForBr/type/type";


const initStait: InitState = {
    name: 'Bro Form',
    password: "123",
    datareq: [
        {id: 1, email: '@mail'},
        {id: 2, email: '@mail'},
        {id: 3, email: '@mail'},
        {id: 5, email: '@mail'},
    ]
};


export const proteinstoreReducer = (state = initStait, action: TypeActionForm | TypeActionReq | TypeActionRemove | TypeActionTEST): InitState => {
    switch (action.type) {
        case FORM_DATA:
            return {
                ...state,
                name: action.data.name,

            };
        case REQUEST_DATA:
            return {
                ...state, datareq: [...state.datareq, action.data]
            };
        case REMOVE:
            debugger
            return {
                ...state, datareq: state.datareq.filter(value => value.id != action.data)
            };
        case TEST:
            debugger
            const x=state;
            x.password="12312312";
            initStait.password="!233333333";

            return initStait;

        default:
            return state;
    }
};

export const methodFormDespatch = (data: InitStateForm): TypeActionForm => ({type: FORM_DATA, data});
export const methodRequestDispatch = (data: InitStateReq): TypeActionReq => ({type: REQUEST_DATA, data});
export const methodRemoveDispatch = (data: number): TypeActionRemove => ({type: REMOVE, data});
export const methodRemoveDispatchTEST = (): TypeActionTEST => ({type: TEST});
