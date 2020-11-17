/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import s from "./style.module.css";
import Figure from "../Figure";

const CantGiveName = () => {
  const shapes = ["square", "circle"];
  const colors = ["red", "gray", "blue", "cyan", "yellow", "orange"];

  const [shape, setShape] = useState("");
  const [color, setColor] = useState("red");

  return (
    <Router>
      <div className={s.container}>
        <ul className={s.shapeList}>
          {shapes.map((item, i) => (
            <li key={i} className={s.item}>
              <Link
                to={`/figure/${item}/${color}`}
                onClick={() => setShape(item)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={s.colorList}>
          {colors.map((item, i) => (
            <li key={i} className={s.item}>
              <Link
                to={`/figure/${shape}/${item}`}
                onClick={() => setColor(item)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <Switch>
          <Route path="/figure/:shape/:color" children={<Figure />} />
        </Switch>
      </div>
    </Router>
  );
};

export default CantGiveName;
