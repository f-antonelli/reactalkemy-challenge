import DishesList from "components/DishesList";
import Form from "components/Form";
import Menu from "components/Menu";
import { useDishes } from "hooks/useDishes";
import { useState } from "react";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [typeDish, setTypeDish] = useState("");
  const { dishes, loading } = useDishes({ keyword, typeDish });

  return (
    <div>
      <Menu />
      <Form setKeyword={setKeyword} setTypeDish={setTypeDish} />
      <DishesList dishes={dishes} loading={loading} />
    </div>
  );
};

export default Home;
