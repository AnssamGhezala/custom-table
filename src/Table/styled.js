import styled from "styled-components";

export const TH = styled.th`
  background-color: ${props => {
    return props.color;
  }};
  color: ${props => {
    switch (props.color) {
      case "black":
        return "white";
      default:
        return "black";
    }
  }};
`;

export const TR = styled.tr``;

export const TD = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const Table = styled.table`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  border-collapse: collapse;
  width: 100%;
  display: table;
  border-style: solid;
  border-color: black;
`;
