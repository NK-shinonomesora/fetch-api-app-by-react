import React, { useEffect } from "react";
import Fetch from "../customhooks/fetch";
import "../css/table.css";

const Table: React.FC = () => {
    const { data, myFetch, fetchAPI } = Fetch();

    useEffect(() => {
        fetchAPI(myFetch[2]);
    }, []);

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th colSpan={6}>Testing FetchAPI by utilizing https://www.umayadia.com/Note/Note028WebAPISample.htm.</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Button for HTTP Request</td>
                    <td>Input data</td>
                    <td>Description</td>
                    <td>HTTP Response</td>
                    <td>All persons</td>
                </tr>
                <tr>
                    <td><button onClick={() => fetchAPI(myFetch[0], (document.getElementById("name") as HTMLInputElement).value)}>Click</button></td>
                    <td><label>name</label><input id="name" type="text"></input></td>
                    <td>Get information of a person input in the form.</td>
                    <td>{data[0].display(myFetch[0].isFirst)}</td>
                    <td rowSpan={6}>{data[2].display(true)}</td>
                </tr>
                <tr>
                    <td><button onClick={() => fetchAPI(myFetch[1])}>Click</button></td>
                    <td>Unnecessary</td>
                    <td>Get this API information.</td>
                    <td>{data[1].display(myFetch[1].isFirst)}</td>
                </tr>
                <tr>
                    <td>
                        <button onClick={async () => {
                            await fetchAPI(
                                myFetch[3],
                                {
                                    name: (document.getElementById("postName") as HTMLInputElement).value,
                                    note: (document.getElementById("postNote") as HTMLInputElement).value,
                                    age: parseInt((document.getElementById("postAge") as HTMLInputElement).value),
                                    registerDate: (document.getElementById("postDate") as HTMLInputElement).value
                                }
                            )
                            await fetchAPI(myFetch[2])
                            }}>
                        Click</button>
                    </td>
                    <td>
                        <ul>
                            <li><label>name</label><input id="postName" type="text"></input></li>
                            <li><label>note</label><input id="postNote" type="text"></input></li>
                            <li><label>age</label><input id="postAge" type="text"></input></li>
                            <li><label>registerDate</label><input id="postDate" type="text"></input></li>
                        </ul>
                    </td>
                    <td>Post a person by input data.</td>
                    <td>{data[3].display(myFetch[3].isFirst)}</td>
                </tr>
                <tr>
                    <td>
                        <button onClick={async () => {
                            await fetchAPI(
                                myFetch[4],
                                {
                                    name: (document.getElementById("putName") as HTMLInputElement).value,
                                    note: (document.getElementById("putNote") as HTMLInputElement).value,
                                    age: parseInt((document.getElementById("putAge") as HTMLInputElement).value),
                                    registerDate: (document.getElementById("putDate") as HTMLInputElement).value
                                }
                            )
                            await fetchAPI(myFetch[2])
                            }}>
                        Click</button>
                    </td>
                    <td>
                        <ul>
                            <li><label>name</label><input id="putName" type="text"></input></li>
                            <li><label>note</label><input id="putNote" type="text"></input></li>
                            <li><label>age</label><input id="putAge" type="text"></input></li>
                            <li><label>registerDate</label><input id="putDate" type="text"></input></li>
                        </ul>
                    </td>
                    <td>Update the data of the person by input data.</td>
                    <td>{data[4].display(myFetch[4].isFirst)}</td>
                </tr>
                <tr>
                    <td><button onClick={async () => {
                        await fetchAPI(myFetch[5], (document.getElementById("deleteName") as HTMLInputElement).value)
                        await fetchAPI(myFetch[2])
                    }}>Click</button></td>
                    <td><label>name</label><input id="deleteName" type="text"></input></td>
                    <td>Delete the person input in the form.</td>
                    <td>{data[5].display(myFetch[5].isFirst)}</td>
                </tr>
                <tr>
                    <td><button onClick={async () => {
                        await fetchAPI(myFetch[6])
                        await fetchAPI(myFetch[2])
                    }}>Click</button></td>
                    <td><label>Unnecessary</label></td>
                    <td>Reset data</td>
                    <td>{data[6].display(myFetch[6].isFirst)}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default Table;