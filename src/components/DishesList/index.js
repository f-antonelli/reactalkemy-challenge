import Spinner from "components/Spinner";
import Dish from "../Dish";

export default function DishesList({ dishes, loading }) {

  if (loading) return <Spinner />
  
  return (
    <div className="card-group d-flex justify-content-center flex-wrap">
      {dishes.map(({ id, title, image }) => (
        <Dish key={id} id={id} title={title} image={image} />
      ))}
    </div>
  );
}
