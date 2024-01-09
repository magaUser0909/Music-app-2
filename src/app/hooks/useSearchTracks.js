import { useState } from "react";

export const useSearchTracks = (onChange) => {
  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    setValue(target.value);
    onChange(target.value);
  };

  return { value, handleChange };
};
