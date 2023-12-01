import React from "react";
import Table from "./table";

const HomePage: React.FC = () => {
    //const { data, status, getData } = Fetch();

    return (
        <>
        {/* { data !== null ? <p>{data.data[0]}</p> : <p>データなし</p> }
        <div>
            <button onClick={() => getData()}>getData</button>
        </div> */}
        <Table />
        </>
    )
}

export default HomePage;