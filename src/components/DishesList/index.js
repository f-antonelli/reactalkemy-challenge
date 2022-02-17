import Spinner from "components/Spinner";
import Dish from "../Dish";

export default function DishesList({ dishes, loading, addDish }) {

  if (loading) return <Spinner />;
  return (
    <div className="card-group d-flex justify-content-center flex-wrap">
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={{...dish}} />
      ))}
    </div>
  );
}
