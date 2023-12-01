import React from "react";
import NormalResponse from "./normalResponse";

export default class GetPersonsName extends NormalResponse {
    data: Person = null;

    display(): JSX.Element {
        return (
            <>
            <p>{ this.data !== null ? <strong>{ this.data.name }</strong> : <span>No data</span> }</p>
            </>
        )
    }

    setResponse(success: boolean, status: number, url: string, data: Person): void {
        this.success = success;
        this.status = status;
        this.url = url;
        this.data = data;
    }
}