"use client";

import Link from "next/link";

import React, { Suspense, useState } from "react";
import { MyComponent } from "./components/my-component";
import dynamic from "next/dynamic";

const MyComponentV2 = React.lazy(() => import("@/app/components/my_component-v2"));

const ComponentA = dynamic(() => import("@/app/components/component-a"));
const ComponentB = dynamic(() => import("@/app/components/component-b"));
const ComponentC = dynamic(() => import("@/app/components/component-c"), {
  ssr: false,
});

export default function Home() {

  const [showMore, setShowMore] = useState(false);

  return (

    <>
      <button id="dropdownButton" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="dropdownButton">Selecciona una opción</button>
      <ul id="dropdownButton" role="menu" aria-labelledby="dropdownButton">
        <li role="menuitem">Item 1</li>
        <li role="menuitem">Item 2</li>
        <li role="menuitem">Item 3</li>
      </ul>
      <label id="selectLabel">Selecciona una opción: </label>
      <select id="selectList" aria-labelledby="selectLabel" role="listbox" aria-expanded="false">
        <option value={"item1"}>Item 1</option>
        <option value={"item2"}>Item 2</option>
        <option value={"item3"}>Item 3</option>
      </select>
      <Link href={"google.com"}>
        <label tabIndex={-1}>Ir a google</label>
      </Link>
      <div>
        <ComponentA />
        {
          showMore && <ComponentB />
        }
        <button onClick={() => setShowMore(!showMore)}>Toggle</button>

        <ComponentC />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponentV2 />
      </Suspense>
      <MyComponent />
    </>

  )

};