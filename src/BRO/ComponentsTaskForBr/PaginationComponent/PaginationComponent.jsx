import React, {useEffect, useState} from "react";
import {Page} from "./Page";
import {requestApiUserForLogger} from "../api/axis";


export const PaginationComponent = (props) => {

    const [page, setPage] = useState(5);
    const [dataPage, setDataPage] = useState([]);
    const [dataFoto, setDataFoto] = useState();

    const handlerDataPage = async (page) => {

        let data =
            await requestApiUserForLogger.getReqPage(page);

        setDataPage(data.data);
    };


    useEffect(async () => {

        let data = await requestApiUserForLogger.getReq();

        setDataPage(data.data);
    }, []);

    const methodFoto = (e) => {
        debugger
        if (e.target.value) {
            setPage(e.target.value);
        }
    };

    return (
        <div>
           {/*<img src={dataFoto} alt={"cool   "}/>*/}

            <input type={"file"} onChange={methodFoto}/>
            <Page page={page} handlerDataPage={handlerDataPage} dataPage={dataPage}/>
        </div>
    )

};
