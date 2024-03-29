import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PauseIcon = (props) => (
  <Svg
    fill="#000000"
    width="24px"
    height="24px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={1.414}
    {...props}
  >
    <Path d="M6.964 3.68A.684.684 0 0 0 6.286 3H4.93a.684.684 0 0 0-.678.68v8.631c0 .374.303.677.678.677h1.355a.681.681 0 0 0 .678-.677V3.68h.001zm4.783.011a.685.685 0 0 0-.68-.681h-1.36a.683.683 0 0 0-.68.68v8.628c0 .376.304.68.68.68h1.36c.373 0 .68-.307.68-.68V3.691z" />
  </Svg>
);
export default PauseIcon;
