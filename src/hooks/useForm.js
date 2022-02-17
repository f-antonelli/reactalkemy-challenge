import { useState } from "react";

export const useForm = (initialState = '') => {
  const [input, setInput] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((old) => ({
      ...old,
      [name]: value,
    }));
  };

  const reset = () => {
    setInput(initialState);
  };

  return [input, handleChange, reset];
};
