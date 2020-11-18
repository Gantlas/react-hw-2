/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import s from "./style.module.css";

const Figure = () => {
  const { shape, color } = useParams();
  const shapesClasses = { 1: "square", 2: "circle" };
  return (
    <div
      className={`${s.figure} ${s[shapesClasses[shape]]}`}
      style={{ backgroundColor: color }}
    >
      {shape.toUpperCase()}
    </div>
  );
};

export default Figure;
