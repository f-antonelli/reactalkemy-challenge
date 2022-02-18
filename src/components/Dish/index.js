import ModalDetails from "components/ModalDetails";
import MenuContext from "context/MenuContext";
import { useContext, useState } from "react";

const Dish = ({ dish }) => {
  const [menu, setMenu, addDish] = useContext(MenuContext);
  const [open, setOpen] = useState(false);

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
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="card border-5 m-3 border-start"
        style={{ minWidth: "18rem", maxWidth: "20rem" }}
      >
        <img className="card-img-top" src={image} alt={`dish${id}`} />
        <div className="card-body">
          <p className="card-text fw-bold fz-500">{title}</p>
        </div>
        <span className="badge bg-success text-wrap my-3">
          {vegan === true && "Vegano"}
        </span>
        <div className="card-footer d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-secondary me-md-2" onClick={handleClickOpen}>
            View details
          </button>
          <button className="btn btn-success" onClick={sendItem}>
            +
          </button>
        </div>
      </div>

      <ModalDetails open={open} handleClose={handleClose} menuItem={menuItem} />
    </>
  );
};

export default Dish;
