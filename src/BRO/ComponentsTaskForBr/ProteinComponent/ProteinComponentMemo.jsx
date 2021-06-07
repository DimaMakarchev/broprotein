import React, {memo, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDateForPage, getPage, getSelectorForm, getSelectorFormReq, getSelectorLoader} from "../selectors/selectors";
import {methodFormDespatch} from "../../ReduxBr/stateBr/proteinstoreReducer";
import {ProteinFormComponent} from "./ProteinComponentForm";
import {requestApiUserForLogger} from "../api/axis";
import {preloaderDispatcher, ThunkPreloaderPage} from "../../ReduxBr/stateBr/preloaderReducer";
import {Preloader} from "./Preloader";
import {compose} from "redux";
import {useHistory} from "react-router";

//begin write what you want wrap , after add component!!!

const ComposeProteinComponent = compose(memo);
// const  ProteinComponentMemo = memo;

const ProteinComponent = ({...props}) => {
    const broObject = {
        id: 1,
        name: "BROOOOOOOOOO"
    };
    let [dataPreloader, setDataPreloader] = useState([]);
    let [pageSize, setPageSize] = useState(5);
    let [x, setX] = useState(55);
    let [totalSize, settoTalSize] = useState(19);
    let [currentPage, setCurrentPage] = useState(2);
    const dispatch = useDispatch();
    const storeDataForm = useSelector(getSelectorForm());
    const storeDataFormReq = useSelector(getSelectorFormReq());
    const storePage = useSelector(getPage());
    const storeDateForPage = useSelector(getDateForPage());
    const storeDataLoader = useSelector(getSelectorLoader());
    const queryString = require('querystring');
    const history = useHistory();

    useEffect(() => {
        history.push({
            pathname: '/protein',
            search: `page=${storePage}&storeDataForm=${storeDataForm}`
        })
    }, [storePage, storeDataForm]);
    useEffect(() => {
        debugger
        let initStait = {
            name: 'Bro Form',
            password: 123,
        };
        debugger
        let parsedUrlQuery = queryString.parse(history.location.search);
        // alert(parsedUrlQuery.storeDataForm);
        initStait = {initStait, name: parsedUrlQuery.storeDataForm};
        debugger
        dispatch(methodFormDespatch(initStait));
        dispatch(ThunkPreloaderPage(Number(parsedUrlQuery.page)));

    }, []);



    const submitMethodForm = useCallback((data) => {
        setX(23);
        dispatch(methodFormDespatch(data))
    }, []);

    const onSubmit = (formdata) => {
        submitMethodForm(formdata);

    };
    //
    //functionCurrentPage
    const functionCurrentPage = (page) => {
        dispatch(ThunkPreloaderPage(page));
    };

    useEffect(async () => {
        //preloader !!!!!!!
        dispatch(preloaderDispatcher());
        let data = await requestApiUserForLogger.getReq();

        console.log(data.data);
        setDataPreloader(data.data);
        setCurrentPage(1);
        dispatch(preloaderDispatcher());

    }, []);
    return (
        <>
            {storeDataLoader && <Preloader/>}
            {/*{dataPreloader.map(value=><div>{value.userId} + {value.id}+ {value.title}</div>)}*/}
            {x}

            <ProteinFormComponent
                storePage={storePage}
                storeDateForPage={storeDateForPage}
                functionCurrentPage={functionCurrentPage}
                currentPage={currentPage}
                pageSize={pageSize}
                totalSize={totalSize}
                broObject={broObject}
                dataPreloader={dataPreloader}
                storeDataForm={storeDataForm}
                storeDataFormReq={storeDataFormReq}
                onSubmit={onSubmit}
                {...props}/>
        </>
    );

};

// export default ProteinComponentMemo(ProteinComponent);
export default ComposeProteinComponent(ProteinComponent);
