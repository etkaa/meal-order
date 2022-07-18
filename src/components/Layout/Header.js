import React from "react";
// import mealsImage from "../../assets/meals.jpg";
import foodsImage from "../../assets/food-1.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meally</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={foodsImage} alt="food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
