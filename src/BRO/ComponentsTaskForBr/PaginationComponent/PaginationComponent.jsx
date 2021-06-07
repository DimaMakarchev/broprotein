import React, {useEffect, useState} from "react";
import {Page} from "./Page";
import {requestApiUserForLogger} from "../api/axis";
import axios from "axios";
import {useHistory} from "react-router";


export const PaginationComponent = (props) => {
   //work local state
    const [page, setPage] = useState(5);
    const [dataPage, setDataPage] = useState([]);
    const [dataFoto, setDataFoto] = useState();
    const [test, setTest] = useState(1);

    const history = useHistory();

    const handlerDataPage = async (page) => {

        let data =
            await requestApiUserForLogger.getReqPage(page);

        setDataPage(data.data);
    };


    const unhandledrejection = () => {
        alert("Error bro((")
    };
    // window.addEventListener("unhandledrejection", unhandledrejection);

    useEffect(async () => {
        try {
            let data = await requestApiUserForLogger.getReq();
            setDataPage(data.data);
        } catch (e) {
            alert(e+"ok bro")
        }


    }, []);



    const methodFoto = (e) => {
        if (e.target.value) {
            setPage(e.target.value);
        }
    };

    const methodBrServer = async (e) => {
        setTest(2);
        let data = await requestApiUserForLogger.getReqServeBR();
        alert(data.data);
        // axios.get("http://localhost:8080/")
        //     .then(response => {
        //         debugger
        //         JSON.parse(response)
        //     })
        //     .then(value => {
        //         debugger
        //         alert(value)
        //     });

    };

    return (
        <div>
            {/*<img src={dataFoto} alt={"cool   "}/>*/}
            {test}
            <input type={"file"} onChange={methodFoto}/>
            <div onClick={methodBrServer}>BROOOOOO server req</div>
            <Page page={page} handlerDataPage={handlerDataPage} dataPage={dataPage}/>
        </div>
    )

};
