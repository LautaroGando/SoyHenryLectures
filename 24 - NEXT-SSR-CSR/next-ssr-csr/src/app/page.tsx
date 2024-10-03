"use client";
import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";
/* import getData from "./services/getDataFetch"; */

export default function Home() {

  /* const data = getData(); */

  return (
    <div>
      {/* <p>{data}</p> */}
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  )

};