// Start coding here
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

function Button(props) {
  const color = {
    primary: "#074ee8",
    secondary: "#07A4E8",
  };

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        margin: 40px;
        font-family: "Sarabun", sans-serif;
      `}
    >
      <div
        css={css`
          width: 330px;
          height: 50px;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 60px;
        `}
      >
        <p
          css={css`
            font-size: 20px;
            margin: 0px;
          `}
        >
          {props.name}
        </p>
        <button
          css={css`
            width: 170px;
            height: 50px;
            color: white;
            background-color: ${color[props.name]};
            border-radius: 4px;
          `}
        >
          Button
        </button>
      </div>
    </div>
  );
}

export default Button;
