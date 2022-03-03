import { Formik, Form, ErrorMessage } from "formik";
import { useForm } from "hooks/useForm";

const TYPES = ["all", "vegan", "whole30", "glutenfree"];

const SearchForm = ({ setKeyword, setTypeDish }) => {
  const [input, handleChange, reset] = useForm({
    dishName: "",
  });
  const { dishName } = input;

  const handleSubmit = (e) => {
    setKeyword(dishName.trim().toLowerCase());
    reset();
  };

  const handleChangeType = (e) => setTypeDish(e.target.value);

  const validateForm = () => {
    let errors = {};

    if (!dishName) {
      errors.dishName = 'Please enter a dish name'
    }
    else if(!/(.*[a-z]){2}/i.test(dishName)) {
      errors.dishName = "Dish name has to be at least 2 characters";
    }

    return errors;
  };

  return (
    <div>
      <h2>Search bar</h2>
      <Formik
        validate={validateForm}
        initialValues={input}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form
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
            <ErrorMessage dishName="dishName" component={() => (
              <div className="w-100 fs-4 text-danger">{errors.dishName}</div>
            )} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
