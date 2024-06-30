import React from "react";
import "./styles.css";
import { CounterButton, Link } from "@repo/ui";
import {JSX} from "react/jsx-runtime";
import Element = JSX.Element;



export default function App(): Element  {

  return (

    <div className="container">

      <h1 className="title">
        Admin <br/>
        <span>Kitchen Sink</span>
      </h1>

      <CounterButton />

      <p className="description">
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo
        </Link>
        {" & "}
        <Link href="https://vitejs.dev/" newTab>
          Vite
        </Link>
      </p>

    </div>

  )

}
