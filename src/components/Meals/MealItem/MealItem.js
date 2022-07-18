import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCardHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div className={classes.wrapper}>
        <div className={classes["img-div"]}>
          <img className={classes["meal-img"]} alt="" src={props.image}></img>
        </div>
        <div className={classes.details}>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCardHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
