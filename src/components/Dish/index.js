import MenuContext from "context/MenuContext";
import { useContext, useState } from "react";

const Dish = ({ dish }) => {
  const { addDish }  = useContext(MenuContext);
  console.log(addDish)
  const {
    healthScore,
    id,
    image,
    pricePerServing,
    readyInMinutes,
    title,
    vegan,
  } = dish;

  const [menuItem] = useState({
    id: id,
    name: title,
    price: pricePerServing,
    img: image,
    time: readyInMinutes,
    isVegan: vegan,
    score: healthScore,
  });

  const sendItem = () => {
    addDish(menuItem);
    console.log(menuItem)
  };

  return (
    <div className="card m-3" style={{ minWidth: "18rem", maxWidth: "20rem" }}>
      <img src={image} alt={`dish${id}`} />
      <div className="card-body">
        <p className="card-text fw-bold fz-500">{title}</p>
      </div>
      <span>{vegan === true && "Vegano"}</span>
      <button onClick={sendItem}>+</button>
    </div>
  );
};

export default Dish;
