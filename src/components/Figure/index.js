/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import s from "./style.module.css";

const Figure = () => {
  const { shape, color } = useParams();

  return (
    <div
      className={`${s.figure} ${s[shape]}`}
      style={{ backgroundColor: color }}
    >
      {shape.toUpperCase()}
    </div>
  );
};

export default Figure;
