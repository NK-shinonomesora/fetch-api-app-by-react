import React from "react";
import NormalResponse from "./normalResponse";

export default class GetPersonsName extends NormalResponse {
    data: Person = null;

    display(isFirst: boolean): JSX.Element {
        return (
            <>
            { isFirst ? <span>No data</span> : this.data === null ? this.displayNull() : this.displayNormal() }
            </>
        )
    }

    setResponse(success: boolean, status: number, url: string, data: Person): void {
        this.success = success;
        this.status = status;
        this.url = url;
        this.data = data;
    }

    displayNormal(): JSX.Element {
        return (
            <ul>
                <li>Status: {this.status}</li>
                <li>Url: {this.url}</li>
                <li>Name: {this.data.name}</li>
                <li>Note: {this.data.note}</li>
                <li>Age: {this.data.age}</li>
                <li>registerDate: {this.data.registerDate}</li>
            </ul>
        )
    }

    displayNull(): JSX.Element {
        return (
            <ul>
                <li>Status: {this.status}</li>
                <li>Url: {this.url}</li>
                <li>Data: null</li>
            </ul>
        )
    }
}