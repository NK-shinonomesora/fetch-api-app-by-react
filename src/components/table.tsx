import React from "react";
import Fetch from "../customhooks/fetch";
import "../css/table.css";

const Table: React.FC = () => {
    const { data, myFetch, fetchAPI } = Fetch();

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th colSpan={3}>Fetch API Test.※Confirm HTTP Resonse by running the FetchAPI to https://www.umayadia.com/Note/Note028WebAPISample.htm.</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Button to HTTP Request</td>
                    <td>Input a name</td>
                    <td>Description</td>
                    <td>HTTP Response</td>
                </tr>
                <tr>
                    <td><button onClick={() => fetchAPI(myFetch[0], (document.getElementById("name") as HTMLInputElement).value)}>Click</button></td>
                    <td><input id="name" type="text"></input></td>
                    <td>Get information of a person input in the form.</td>
                    <td>{data[0].display()}</td>
                    <td rowSpan={3}>右</td>
                </tr>
                <tr>
                    <td><button onClick={() => fetchAPI(myFetch[1])}>Click</button></td>
                    <td>Unnecessary</td>
                    <td>Get this API information.</td>
                    <td>{data[1].display()}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default Table;