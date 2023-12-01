import React from "react";
import NormalResponse from "./normalResponse";

export default class GetManagement extends NormalResponse {
    data: Version = null;

    display(): JSX.Element {
        return (
            <>
            <strong>{ this.data !== null ? <strong>{ this.data.version }</strong> : <span>No data</span> }</strong>
            </>
        )
    }

    setResponse(success: boolean, status: number, url: string, data: Version): void {
        this.success = success;
        this.status = status;
        this.url = url;
        this.data = data;
    }
}