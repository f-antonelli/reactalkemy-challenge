import DishesList from "components/DishesList";
import { useDishes } from "hooks/useDishes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TYPES = ["all", "vegan", "whole30", "glutenfree"];

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [type, setType] = useState(TYPES[0]);
  const { dishes, loading } = useDishes({ keyword, type });
  const navigate = useNavigate();

  const handleChange = (e) => setKeyword(e.target.value);
  const handleChangeRating = (e) => setType(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <header>
      <form onSubmit={handleSubmit}>
      <input
        placeholder="Search a meal here..."
        type="text"
        onChange={handleChange}
        value={keyword}
      />
      <select value={type} onChange={handleChangeRating}>
        <option disabled>Type meal</option>
        {TYPES.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>
      <button>Search</button>
    </form>
      </header>
      <DishesList dishes={dishes} loading={loading} />
    </div>
  );
};

export default Home;
