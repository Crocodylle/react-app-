import React, { Children } from "react";

interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}

const Buttons = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-outline-" + color}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Buttons;
