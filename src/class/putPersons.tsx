import React from "react";
import NormalResponse from "./normalResponse";

export default class PutPersons extends NormalResponse {
    display(isFirst: boolean): JSX.Element {
        return (
            <>
            { isFirst ? <span>No data</span> : this.displayNull() }
            </>
        )
    }

    setResponse(success: boolean, status: number, url: string, data: Person): void {
        this.success = success;
        this.status = status;
        this.url = url;
        this.data = data;
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