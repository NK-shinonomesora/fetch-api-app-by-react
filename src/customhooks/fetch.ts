import { useState } from "react";
import NormalResponse from "../class/normalResponse";
import GetPersonsName from "../class/getPersonsName";
import MyFetch from "../class/myFetch";
import GetPersonsNameFetch from "../class/getPersonsNameFetch";
import GetManagementFetch from "../class/getManagementFetch";
import GetManagement from "../class/getManagement";

const factoryData = () => {
    const data: NormalResponse[] = [
        new GetPersonsName(),
        new GetManagement()
    ];
    return data;
}

const factoryMyFetch = () => {
    const myFetches: MyFetch[] = [
        new GetPersonsNameFetch("GET", "https://umayadia-apisample.azurewebsites.net/api/persons"),
        new GetManagementFetch("GET", "https://umayadia-apisample.azurewebsites.net/api/management")
    ];
    return myFetches;
}

const Fetch = () => {
    const [data, setData] = useState<NormalResponse[]>(factoryData());
    const [myFetch, setMyFetch] = useState<MyFetch[]>(factoryMyFetch());
   
    const fetchAPI = async (mf: MyFetch, name?: string) => {
        const res = await mf.myFetch(name);
        const newData = await mf.myJson(res, data);
        setData(newData);
    }

    const getData = async () => {
        // POST用
        //const person: Person = { name: "user", note: "test", age: 20, registerDate: "1917-05-29T15:18:49" }; // registerDateは右のような形式である必要がある模様
        // const data = await fetch("https://umayadia-apisample.azurewebsites.net/api/persons", { 
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(person)
        // });
        // PUT用
        // const person2: Person = { name: "user3", note: "test3", age: 303, registerDate: "2003-05-29T15:18:49" };
        // const data = await fetch("https://umayadia-apisample.azurewebsites.net/api/persons/user2", { 
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(person2)
        // });
        // DELETE用
        //const data = await fetch("https://umayadia-apisample.azurewebsites.net/api/persons/user3", { method: "DELETE" });
        // ALL DELETE用
        //const data = await fetch("https://umayadia-apisample.azurewebsites.net/api/persons/all/reset", { method: "DELETE" });
        // OPTIONS用
        // const data = await fetch("https://umayadia-apisample.azurewebsites.net/api/persons", { method: "OPTIONS" });
        // const status: StatusCode = { status: data.status, url: data.url };
        // const data2: Options = await data.json();
        // setData(data2);
        // setStatus(status);
    }

    return { data, myFetch, fetchAPI }
}

export default Fetch;
