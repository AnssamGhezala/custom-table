import React from "react";

// import PropTypes from "prop-types";

import * as Styled from "./styled";

export default function Table(props) {
  return <Styled.Table {...props} />;
}

Table.TH = function TH(props) {
  return <Styled.TH {...props} />;
};

Table.TR = function TR(props) {
  return <Styled.TR {...props} />;
};
// Table.TH.propTypes = {
//   color: PropTypes.oneOf(["blue", "red", "green"]).isRequired
// };
