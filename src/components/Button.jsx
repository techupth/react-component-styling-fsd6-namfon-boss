// Start coding here
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

function Button(props) {
  let color = "black";
  switch (props.name) {
    case "primary":
      color = "#074ee8";
      break;
    case "secondary":
      color = "#07A4E8";
      break;
  }
  return (
    <button
      css={css`
        width: 170px;
        height: 50px;
        color: white;
        background-color: ${color};
        border-radius: 4px;
        margin: 8px;
      `}
    >
      Button
    </button>
  );
}

export default Button;
