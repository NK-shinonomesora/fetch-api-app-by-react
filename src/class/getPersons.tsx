import React from "react";
import NormalResponse from "./normalResponse";

export default class GetPersons extends NormalResponse {
    data: Person[] = [];

    display(isFirst: boolean): JSX.Element {
        return (
            <>
            {
              this.data.map((d, i) => (
                <div key={i}>
                  <ul>
                    <li>Name: {d.name}</li>
                    <li>Note: {d.note}</li>
                    <li>Age: {d.age}</li>
                    <li>registerDate: {d.registerDate}</li>
                  </ul>
                  <hr></hr>
                </div>
              ))
            }
            </>
        )
    }

    setResponse(success: boolean, status: number, url: string, data: Person[]): void {
        this.success = success;
        this.status = status;
        this.url = url;
        this.data = data;
    }
}