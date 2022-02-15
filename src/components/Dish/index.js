import React from "react";

const Dish = ({ title, id, image }) => {
  return (
    <div className="card m-3" style={{ minWidth: "18rem", maxWidth: "20rem" }}>
      {/* <Link to={`/dish/${id}`}> */}
      <img src={image} alt={`dish${id}`} />
      <div className="card-body">
        <p className="card-text fw-bold fz-500">{title}</p>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Dish;
