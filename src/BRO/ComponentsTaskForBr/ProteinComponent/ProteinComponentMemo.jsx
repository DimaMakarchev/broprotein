import React, {memo, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDateForPage, getPage, getSelectorForm, getSelectorFormReq, getSelectorLoader} from "../selectors/selectors";
import {methodFormDespatch} from "../../ReduxBr/stateBr/proteinstoreReducer";
import {ProteinFormComponent} from "./ProteinComponentForm";
import {requestApiUserForLogger} from "../api/axis";
import {preloaderDispatcher, ThunkPreloaderPage} from "../../ReduxBr/stateBr/preloaderReducer";
import {Preloader} from "./Preloader";
import {compose} from "redux";


const ComposeProteinComponent = compose(memo);
// const  ProteinComponentMemo = memo;

const ProteinComponent = ({...props}) => {
    const broObject = {
        id: 1,
        name: "BROOOOOOOOOO"
    };
    let [dataPreloader, setDataPreloader] = useState([]);
    let [pageSize, setPageSize] = useState(5);
    let [totalSize, settoTalSize] = useState(19);
    let [currentPage, setCurrentPage] = useState(2);
    const dispatch = useDispatch();
    const storeDataForm = useSelector(getSelectorForm());
    const storeDataFormReq = useSelector(getSelectorFormReq());
    const storePage = useSelector(getPage());
    debugger
    const storeDateForPage = useSelector(getDateForPage());
    debugger
    const storeDataLoader = useSelector(getSelectorLoader());

    const submitMethodForm = useCallback((data) => {
        dispatch(methodFormDespatch(data))
    }, []);

    const onSubmit = (formdata) => {
        debugger
        submitMethodForm(formdata);

    };
    //
    //functionCurrentPage
    const functionCurrentPage = (page) => {
        debugger;
        dispatch(ThunkPreloaderPage(page));
    };

    useEffect(async () => {
        //preloader !!!!!!!
        dispatch(preloaderDispatcher());
        debugger
        let data = await requestApiUserForLogger.getReq();

        console.log(data.data);
        debugger;
        setDataPreloader(data.data);
        setCurrentPage(1);
        dispatch(preloaderDispatcher());

    }, []);
    return (
        <>
            {storeDataLoader && <Preloader/>}
            {/*{dataPreloader.map(value=><div>{value.userId} + {value.id}+ {value.title}</div>)}*/}

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
