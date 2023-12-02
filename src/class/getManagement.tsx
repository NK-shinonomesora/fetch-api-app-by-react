import React from "react";
import NormalResponse from "./normalResponse";

export default class GetManagement extends NormalResponse {
    data: Version = null;

    display(isFirst: boolean): JSX.Element {
        return (
            <>
            { isFirst ? <span>No data</span> : this.displayNormal() }
            </>
        )
    }

    setResponse(success: boolean, status: number, url: string, data: Version): void {
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
            <li>Name: {this.data.version}</li>
        </ul>
        )
    }
}