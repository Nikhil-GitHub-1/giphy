import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DownlaodIcon = (props) => (
  <Svg
    fill="#000000"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    id="download-alt-4"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <Path
      id="secondary"
      d="M12,3V16M8,12l4,4,4-4"
      style={{
        fill: "none",
        stroke: "rgb(44, 169, 188)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <Path
      id="primary"
      d="M20,16v4a1.08,1.08,0,0,1-1.14,1H5.14A1.08,1.08,0,0,1,4,20V16"
      style={{
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </Svg>
);
export default DownlaodIcon;
