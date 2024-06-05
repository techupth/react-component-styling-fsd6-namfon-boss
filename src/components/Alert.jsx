// Start coding here
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import errorImg from "./frown.svg";
import warningImg from "./alert-triangle.svg";
import infoImg from "./alert-circle.svg";
import successImg from "./check-circle.svg";

function Alert(props) {
  const status = {
    error: {
      icon: errorImg,
      color: "#F9C8C8",
    },
    warning: {
      icon: warningImg,
      color: "#F9D9C8",
    },
    info: {
      icon: infoImg,
      color: "#F9EBC8",
    },
    success: {
      icon: successImg,
      color: "#CEF7CD",
    },
  };
  return (
    <div
      css={css`
        width: 650px;
        height: 76px;
        background-color: ${status[props.status].color};
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 30px;
        font-family: "Kanit", sans-serif;
      `}
    >
      <img
        css={css`
          width: 24px;
          height: 24px;
          margin: 0px 20px;
        `}
        src={status[props.status].icon}
      />
      <p
        css={css`
          color: #444444;
          font-weight: 700;
          font-size: 20px;
          padding: 0px;
          margin: 0px;
        `}
      >
        This is {props.status} alert box
      </p>
    </div>
  );
}

export default Alert;
