import { useState } from "react";
import NormalResponse from "../class/normalResponse";
import GetPersonsName from "../class/getPersonsName";
import MyFetch from "../class/myFetch";
import GetPersonsNameFetch from "../class/getPersonsNameFetch";
import GetManagementFetch from "../class/getManagementFetch";
import GetManagement from "../class/getManagement";
import GetPersons from "../class/getPersons";
import GetPersonsFetch from "../class/getPersonsFetch";
import PostPersons from "../class/postPersons";
import PostPersonsFetch from "../class/postPersonsFetch";
import PutPersons from "../class/putPersons";
import PutPersonsFetch from "../class/putPersonsFetch";
import DeletePersons from "../class/deletePersons";
import DeletePersonsFetch from "../class/deletePersonsFetch";
import ResetPersons from "../class/resetPersons";
import ResetPersonsFetch from "../class/resetPersonsFetch";

const factoryData = () => {
    const data: NormalResponse[] = [
        new GetPersonsName(),
        new GetManagement(),
        new GetPersons(),
        new PostPersons(),
        new PutPersons(),
        new DeletePersons(),
        new ResetPersons()
    ];
    return data;
}

const factoryMyFetch = () => {
    const myFetches: MyFetch[] = [
        new GetPersonsNameFetch("GET", "https://umayadia-apisample.azurewebsites.net/api/persons"),
        new GetManagementFetch("GET", "https://umayadia-apisample.azurewebsites.net/api/management"),
        new GetPersonsFetch("GET", "https://umayadia-apisample.azurewebsites.net/api/persons"),
        new PostPersonsFetch("POST", "https://umayadia-apisample.azurewebsites.net/api/persons"),
        new PutPersonsFetch("PUT", "https://umayadia-apisample.azurewebsites.net/api/persons"),
        new DeletePersonsFetch("DELETE", "https://umayadia-apisample.azurewebsites.net/api/persons"),
        new ResetPersonsFetch("DELETE", "https://umayadia-apisample.azurewebsites.net/api/persons/all/reset")
    ];
    return myFetches;
}

const Fetch = () => {
    const [data, setData] = useState<NormalResponse[]>(factoryData());
    const [myFetch] = useState<MyFetch[]>(factoryMyFetch());
   
    const fetchAPI = async (mf: MyFetch, input?: string | Person) => {
        const res = await mf.myFetch(input);
        const newData = await mf.myJson(res, data);
        setData(newData);
    }

    return { data, myFetch, fetchAPI }
}

export default Fetch;
