import React from "react";
import ReactDOM from "react-dom";

import Table from "./Table/Table";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Table>
        <thead>
          <tr>
            <Table.TH color="black">Column 1</Table.TH>
            <Table.TH color="black">Column 2</Table.TH>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
