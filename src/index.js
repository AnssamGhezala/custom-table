import React from "react";
import ReactDOM from "react-dom";

import Table from "./Table/Table";

import "./styles.css";

function App() {
  const data = [
    {
      Name: "Anssam",
      Age: "20"
    },
    {
      Name: "Rihab",
      Age: "12"
    },
    {
      Name: "Amir",
      Age: "3"
    }
  ];

  return (
    <div className="App">
      <Table
        data={data}
        theme={Table.THEME.DARK}
        density={Table.DENSITY.AVERAGE}
      >
        <Table.TR>
          <Table.TD>Seif</Table.TD>
          <Table.TD>3</Table.TD>
        </Table.TR>
      </Table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
