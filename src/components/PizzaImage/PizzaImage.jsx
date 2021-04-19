import React from "react";

import classes from "./PizzaImage.css";
import PizzaImg from "../../assets/pizza.jpg";

export default function PizzaImage(props) {
  return (
    <div className={classes.PizzaImage}>
      <img src={PizzaImg} alt="Pizza" className={classes.PizzaImg} />
    </div>
  );
}
