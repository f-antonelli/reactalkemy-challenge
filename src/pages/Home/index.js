import DishesList from "components/DishesList";
import SearchForm from "components/SearchForm";
import Menu from "components/Menu";
import { useDishes } from "hooks/useDishes";
import { useState } from "react";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [typeDish, setTypeDish] = useState("");
  const { dishes, loading } = useDishes({ keyword, typeDish });

  return (
    <div className="bg-success p-2 text-dark bg-opacity-50">
      <Menu />
      <SearchForm setKeyword={setKeyword} setTypeDish={setTypeDish} />
      <DishesList dishes={dishes} loading={loading} />
    </div>
  );
};

export default Home;
