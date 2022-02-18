import { useForm } from "hooks/useForm";

const TYPES = ["all", "vegan", "whole30", "glutenfree"];

const Form = ({ setKeyword, setTypeDish }) => {
  const [input, handleChange, reset] = useForm({
    dishName: "",
  });

  const { dishName } = input;

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(dishName.trim().toLowerCase());
    reset();
  };

  const handleChangeType = (e) => setTypeDish(e.target.value);

  return (
    <div>
      <h2>Search bar</h2>
    <form
      onSubmit={handleSubmit}
      className="input-group mb-3"
      style={{ width: "40%", minWidth: "400px" }}
    >
      <input
        className="form-control mb-2"
        type="text"
        name="dishName"
        placeholder="Search a meal..."
        value={dishName}
        onChange={handleChange}
      />
      <select
        className="form-select form-select-sm"
        onChange={handleChangeType}
        style={{ height: "38.2px", maxWidth: "120px" }}
      >
        <option defaultValue disabled>
          Type Meal
        </option>
        {TYPES.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>
      <button
        type="submit"
        className="btn btn-outline-success btn-sm"
        style={{ height: "38.2px" }}
      >
        {" "}
        &#x1F50D;{" "}
      </button>
    </form>
    </div>
  );
};

export default Form;
