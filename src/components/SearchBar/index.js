// import Spinner from "components/Spinner";
// import { useDishes } from "hooks/useDishes";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const TYPES = ["all", "vegan", "whole30", "glutenfree"];

// const SearchBar = () => {
//   const [keyword, setKeyword] = useState("");
//   const [type, setType] = useState(TYPES[0]);
//   const { loading } = useDishes({ keyword, type });
//   const navigate = useNavigate();

//   const handleChange = (e) => setKeyword(e.target.value);
//   const handleChangeRating = (e) => setType(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate(`/search/${keyword}`)
//   };


//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         placeholder="Search a meal here..."
//         type="text"
//         onChange={handleChange}
//         value={keyword}
//       />
//       <select value={type} onChange={handleChangeRating}>
//         <option disabled>Type meal</option>
//         {TYPES.map((type) => (
//           <option key={type}>{type}</option>
//         ))}
//       </select>
//       <button>Search</button>
//     </form>
//   );
// };

// export default SearchBar;
