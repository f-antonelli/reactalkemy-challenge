import MenuContext from "context/MenuContext";
import { useContext } from "react";

const Menu = () => {
  const [
    menu,
    setMenu,
    addDish,
    removeDish,
    totalPrice,
    totalScore,
    totalTime,
  ] = useContext(MenuContext);

  return (
    <div>
      <h1>Menu</h1>
      {menu.length > 0 ? (
        <>
          <div className="card" style={{ width: "18rem" }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item fw-bold">
                MENU TOTAL PRICE: ${totalPrice.toFixed(2)}
              </li>
              <li className="list-group-item fw-bold">
                MENU TOTAL SCORE: {totalScore}
              </li>
              <li className="list-group-item fw-bold">
                MENU TOTAL TIME: {totalTime} min.
              </li>
            </ul>
          </div>

          <div className="card-group d-flex justify-content-center flex-wrap">
            {menu.map((dish, index) => {
              return (
                <div
                  className="card m-3"
                  style={{ minWidth: "18rem", maxWidth: "20rem" }}
                  key={index}
                >
                  <img src={dish.img} alt={`dish${dish.id}`} />
                  <div className="card-body">
                    <p className="card-text fw-bold fz-500">{dish.name}</p>
                  </div>
                  <span className="badge bg-success text-wrap my-3">
                    {dish.isVegan === true && "Vegano"}
                  </span>
                  <div className="card-footer d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                      className="btn btn-danger"
                      onClick={() => removeDish(dish)}
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <p>Menu is emply, please choose a dish...</p>
      )}
    </div>
  );
};

export default Menu;
